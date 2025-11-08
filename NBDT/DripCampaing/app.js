document.addEventListener('DOMContentLoaded', () => {
  setupDeck('deck-left');
  setupDeck('deck-right');
  initComments();
});

function setupDeck(deckId) {
  const deck = document.getElementById(deckId);
  if (!deck) return;
  const slides = deck.querySelectorAll('.slide');
  if (!slides.length) return;

  let index = 0;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === 0);
  });

  const controls = document.querySelector(`.deck-controls[data-deck="${deckId}"]`);
  const statusEl = controls ? controls.querySelector('.deck-status') : null;
  updateDeckStatus(statusEl, index, slides.length);

  const buttons = document.querySelectorAll(`.nav-button[data-target="${deckId}"]`);
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const direction = btn.getAttribute('data-direction') === 'next' ? 1 : -1;
      slides[index].classList.remove('active');
      index = (index + direction + slides.length) % slides.length;
      slides[index].classList.add('active');
      updateDeckStatus(statusEl, index, slides.length);
    });
  });
}

function updateDeckStatus(statusEl, index, total) {
  if (statusEl) {
    statusEl.textContent = `Slide ${index + 1} of ${total}`;
  }
}

function initComments() {
  const floatingBtn = document.getElementById('comment-floating-btn');
  const commentModal = document.getElementById('comment-modal');
  const commentForm = document.getElementById('comment-form');
  const cancelBtn = document.getElementById('cancel-comment');
  const modalCloseBtn = document.getElementById('comment-modal-close');
  const selectedTextBox = document.getElementById('selected-text');
  const feedback = document.getElementById('comment-feedback');
  const deckRight = document.getElementById('deck-right');

  if (!floatingBtn || !commentModal || !commentForm || !deckRight) {
    return;
  }

  let pendingSelection = null;

  const hideFloatingButton = () => {
    floatingBtn.hidden = true;
    floatingBtn.style.top = '-9999px';
    floatingBtn.style.left = '-9999px';
  };

  const showFloatingButton = (rect) => {
    const top = Math.max(window.scrollY + rect.top - 36, window.scrollY + 8);
    const left = Math.max(window.scrollX + rect.left, window.scrollX + 8);
    floatingBtn.style.top = `${top}px`;
    floatingBtn.style.left = `${left}px`;
    floatingBtn.hidden = false;
  };

  const clearSelection = () => {
    window.getSelection().removeAllRanges();
    pendingSelection = null;
    selectedTextBox.textContent = 'Ninguno';
  };

  const openModal = () => {
    if (!pendingSelection) return;
    selectedTextBox.textContent = `"${pendingSelection.text}"`;
    commentModal.hidden = false;
    commentForm.elements.author.focus();
    announce(feedback, 'Completa tu nombre y comentario para guardarlo.');
  };

  const closeModal = (message) => {
    commentModal.hidden = true;
    commentForm.reset();
    if (message) announce(feedback, message);
    else announce(feedback, '');
    hideFloatingButton();
    clearSelection();
  };

  const handleSelectionChange = () => {
    if (!commentModal.hidden) {
      hideFloatingButton();
      return;
    }

    const selection = window.getSelection();
    const selectionText = selection?.toString().trim();
    if (!selection || selection.isCollapsed || !selectionText) {
      hideFloatingButton();
      return;
    }

    const slideEl = findSlideFromSelection(selection);
    if (!slideEl || !deckRight.contains(slideEl)) {
      hideFloatingButton();
      announce(feedback, 'Sólo puedes comentar sobre los correos en la columna derecha.', true);
      return;
    }

    const range = selection.getRangeAt(0).cloneRange();
    const rect = range.getBoundingClientRect();
    if (!rect || (rect.top === 0 && rect.left === 0 && rect.width === 0 && rect.height === 0)) {
      hideFloatingButton();
      return;
    }

    pendingSelection = {
      slideId: slideEl.dataset.slideId,
      text: selectionText,
    };
    showFloatingButton(rect);
  };

  floatingBtn.addEventListener('click', () => {
    floatingBtn.hidden = true;
    openModal();
  });

  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!pendingSelection) {
      announce(feedback, 'Selecciona un texto antes de guardar un comentario.', true);
      return;
    }

    const author = commentForm.elements.author.value.trim();
    const comment = commentForm.elements.comment.value.trim();

    if (!author || !comment) {
      announce(feedback, 'El nombre y el comentario son obligatorios.', true);
      return;
    }

    try {
      const response = await fetch('/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slideId: pendingSelection.slideId,
          selectionText: pendingSelection.text,
          author,
          comment,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'No fue posible guardar el comentario.');
      }

      const savedComment = await response.json();
      applyCommentHighlight(savedComment);
      closeModal('Comentario guardado correctamente.');
    } catch (error) {
      console.error(error);
      announce(feedback, error.message || 'Ocurrió un error al guardar el comentario.', true);
    }
  });

  const cancelHandler = (message = 'Se canceló el registro del comentario.') => {
    if (!commentModal.hidden) {
      closeModal(message);
    } else {
      hideFloatingButton();
      clearSelection();
      if (message) announce(feedback, message);
    }
  };

  cancelBtn?.addEventListener('click', () => cancelHandler());
  modalCloseBtn?.addEventListener('click', () => cancelHandler());

  document.addEventListener('mouseup', handleSelectionChange);
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      cancelHandler();
    } else {
      handleSelectionChange();
    }
  });
  document.addEventListener('selectionchange', handleSelectionChange);

  fetch('/comments')
    .then((res) => (res.ok ? res.json() : []))
    .then((comments) => {
      if (Array.isArray(comments)) {
        comments.forEach(applyCommentHighlight);
      }
    })
    .catch((error) => {
      console.warn('No se pudieron cargar los comentarios guardados.', error);
    });
}

function findSlideFromSelection(selection) {
  if (!selection) return null;

  const anchorSlide = findSlide(selection.anchorNode);
  const focusSlide = findSlide(selection.focusNode);

  if (!anchorSlide || !focusSlide) return null;
  return anchorSlide === focusSlide ? anchorSlide : null;
}

function findSlide(node) {
  if (!node) return null;
  let current = node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
  while (current && current !== document.body) {
    if (current.classList && current.classList.contains('slide') && current.dataset.slideId) {
      return current;
    }
    current = current.parentNode;
  }
  return null;
}

function announce(element, message, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.style.color = isError ? '#b91c1c' : '#047857';
}

function applyCommentHighlight(comment) {
  if (!comment || !comment.slideId || !comment.selectionText) return;
  if (document.querySelector(`mark.commented[data-comment-id="${comment.id}"]`)) {
    return; // Already highlighted
  }
  const slide = document.querySelector(`.slide[data-slide-id="${comment.slideId}"]`);
  if (!slide) return;
  wrapSelectionInSlide(slide, comment.selectionText, comment);
}

function wrapSelectionInSlide(slideEl, text, comment) {
  const walker = document.createTreeWalker(slideEl, NodeFilter.SHOW_TEXT, null);
  const normalizedText = text.trim();
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const nodeValue = node.nodeValue;
    if (!nodeValue) continue;

    const startIndex = nodeValue.indexOf(normalizedText);
    if (startIndex === -1) continue;

    const range = document.createRange();
    range.setStart(node, startIndex);
    range.setEnd(node, startIndex + normalizedText.length);

    const mark = document.createElement('mark');
    mark.className = 'commented';
    mark.dataset.commentId = comment.id;
    mark.dataset.author = comment.author;
    mark.dataset.comment = comment.comment;
    mark.appendChild(range.extractContents());
    range.insertNode(mark);
    range.detach();
    return true;
  }
  return false;
}

