/* eslint-disable no-use-before-define */
const STRINGS = {
  en: {
    'title': 'Nayara Bocas del Toro - Drip Campaign Redesign',
    'subtitle':
      'Start by reviewing the 4 proposal slides. After slide 4, click "See proposal email copy" to view the complete 6-email sequence side-by-side. Select any text to add comments.',
    'language.toggle': 'Ver en español',
    'welcome.title': 'Welcome!',
    'welcome.intro': 'Select any text in the email deck to leave contextual comments. Please tell us who you are.',
    'welcome.step1': 'Highlight any sentence or paragraph inside the emails.',
    'welcome.step2': 'Use the floating “Add comment” button next to your selection.',
    'welcome.step3': 'Hover the highlights to read saved notes from the team.',
    'welcome.cta': 'Start exploring',
    'welcome.firstName': 'First name',
    'welcome.lastName': 'Last name',
    'welcome.firstNamePlaceholder': 'First name',
    'welcome.lastNamePlaceholder': 'Last name',
    'comments.instructions':
      '<strong>Comments:</strong> Select text in the emails and then click the floating button to add your note with first and last name. Hover any highlight to read saved comments.',
    'comments.floatingButton': 'Add comment',
    'comments.modalTitle': 'Add comment',
    'comments.selectedTextLabel': 'Selected text:',
    'comments.selectedTextNone': 'None',
    'comments.firstName': 'First name',
    'comments.lastName': 'Last name',
    'comments.firstNamePlaceholder': 'First name',
    'comments.lastNamePlaceholder': 'Last name',
    'comments.commentLabel': 'Comment',
    'comments.commentPlaceholder': 'What should we improve?',
    'comments.save': 'Save',
    'comments.cancel': 'Cancel',
    'feedback.selectText': 'Select text inside the email column before saving a comment.',
    'feedback.wrongColumn': 'You can comment only on the email slides.',
    'feedback.saved': 'Comment saved successfully.',
    'feedback.cancelled': 'Comment cancelled.',
    'feedback.namesRequired': 'First and last name are required.',
    'feedback.commentRequired': 'The comment cannot be empty.',
    'deck.status': (current, total) => `Slide ${current} of ${total}`,
    'deck.status.email': (current, total) => `Email ${current} of ${total}`,
    'subtitle.split':
      'Left: Proposal slides with findings and recommendations. Right: Complete 6-email sequence in agent voice. Select any text to add comments.',
    'subtitle.split.es':
      'Izquierda: Diapositivas de propuesta con hallazgos y recomendaciones. Derecha: Secuencia completa de 6 correos en voz del agente. Selecciona cualquier texto para agregar comentarios.',
    'slides.left.1.title': 'Context and Problem',
    'slides.left.1.section1': 'Current setup',
    'slides.left.1.section2': 'Resulting issues',
    'slides.left.1.item1':
      '<strong>Two enrollment paths:</strong> Two forms on our website—<span data-form="geo">Get Exclusive Offers (GEO form)</span> and <span data-form="yna">You Need Assistance (YNA form)</span>—feed the same automated email sequence.',
    'slides.left.1.item2':
      '<strong>Automation + human follow-up:</strong> <span data-form="geo,yna">Both forms</span> automatically enroll leads into the legacy drip campaign while agents simultaneously launch their manual outreach.',
    'slides.left.2.title': 'Key Insights',
    'slides.left.2.item1': 'The manual first email used by agents—refined by Kelly over time—may seem a bit heavy for a first contact, but it has proven to drive quick replies even under our previous messy communication setup.',
    'slides.left.2.item2': 'Dan expects very proactive outreach: immediate email, SMS and phone contact when a lead arrives.',
    'slides.left.2.item3': 'Guests who fill the <span data-form="yna">YNA form</span> often share dates and specific needs, and expect individualized help rather than a generic brochure style message.',
    'slides.left.2.item4': 'The main problem is not level of contact but lack of orchestration and consistent voice.',
    'slides.left.3.title': 'Proposed Flow (GEO vs YNA)',
    'slides.left.3.section1': '<span data-form="geo">Get Exclusive Offers (GEO form)</span>',
    'slides.left.3.section2': '<span data-form="yna">You Need Assistance (YNA form)</span>',
    'slides.left.3.item1': 'Keep automatic enrollment in the drip campaign, but replace the old Email 1 with the new, tested first email created by Kelly.',
    'slides.left.4.title': 'Justification and Next Steps',
    'slides.left.4.section1': 'Why this works',
    'slides.left.4.section2': 'Implementation notes',
    'slides.left.4.item1': 'One primary first email concept for <span data-form="geo,yna">both forms</span>, aligned with what agents already know performs well.',
    'slides.left.4.item2': 'All emails now speak in the same agent centered voice: I, me, my, and clear contact pathways.',
    'slides.left.4.item3': 'Keeps aggressive follow up but removes confusion for the guest.',
    'slides.left.4.item4': 'In HubSpot, map <span data-form="geo">GEO</span> to the automated 6 email sequence starting at new Email 1.',
    'slides.left.4.item5': 'For <span data-form="yna">YNA</span>, provide agents with a ready template for Email 1 and a simple way to start the sequence at Email 2.',
    'slides.left.tag.findings': 'SCREENSHOTS',
    'slides.left.tag.proposal': 'Proposal',
    'slides.email.1.title': 'Email 1 - Available Promotions, First Contact',
    'slides.email.2.title': 'Email 2 - Private Island Getaway',
    'slides.email.3.title': 'Email 3 - The Coolest Place on Earth',
    'slides.email.4.title': 'Email 4 - Let Me Handle the Details',
    'slides.email.5.title': 'Email 5 - A Fine, Fresh Taste of Bocas del Toro',
    'slides.email.6.title': 'Email 6 - Adventures Await in Bocas del Toro',
    'slides.email.badge.new': 'New first email',
    'slides.email.badge.existing': 'Existing layout, agent voice',
    'slides.email.badge.minor': 'Existing layout, minor text edits',
    'slides.email.meta.subject': 'Subject:',
    'slides.email.1.section.rates': 'Sample rate overview',
    'slides.email.1.section.policies': 'Policies - High Season Savings',
    'slides.email.1.section.allinclusive': 'All inclusive experience',
    'slides.email.1.section.howtoget': 'How to get here',
    'slides.email.cta.contactme': 'Contact Me',
    'slides.email.cta.contactus': 'Contact Us',
    'slides.email.cta.contactusex': 'Contact Us!',
    'slides.email.cta.booknow': 'Book Now',
    'viewProposal.button': 'See proposal email copy',
    'email.1.p1': 'Hello [Lead Name],',
    'email.1.p2': 'My name is [Agent Name], Reservations Specialist at Nayara Bocas del Toro. I am here to make your trip planning simple and ensure that everything is perfectly organized for your stay.',
    'email.1.p3': '<strong>Season Savings – High Season Special</strong><br />Enjoy 30% off (before taxes) on stays through December 19, 2025.',
    'email.1.rate.note1': 'Per night per couple.',
    'email.1.rate.note2': '<em>Note:</em> A third guest can be accommodated in the Over-The-Water Villas with an additional bed: USD 161.40 per night (taxes included). The best rate is guaranteed when booking directly by email or phone.',
    'email.1.policies.item1': 'Travel Period: November 20 - December 19, 2025',
    'email.1.policies.item2': 'Blocked Dates: November 24 - 30, 2025 (Thanksgiving Week)',
    'email.1.policies.item3': 'Deposit: 100 percent upon reservation',
    'email.1.policies.item4': 'Cancellation: Not applicable (non refundable)',
    'email.1.allinclusive.item1': 'All meals and beverages',
    'email.1.allinclusive.item2': 'Villa service and in-room snack stocking',
    'email.1.allinclusive.item3': 'Kayaks, paddleboards, snorkel equipment, gym access',
    'email.1.allinclusive.item4': 'Concierge assistance for activity reservations and spa treatments',
    'email.1.allinclusive.item5': 'Weekly complimentary activities',
    'email.1.allinclusive.item6': 'Boat transfers to and from Bocas del Toro Airport (BOC) for check in and check out',
    'email.1.allinclusive.item7': 'High speed wireless internet',
    'email.1.howtoget.p1': 'Most of our guests arrive at Tocumen International Airport (PTY), then take a 50 minute domestic flight from Marcos A. Gelabert Airport (PAC) to Bocas del Toro Airport (BOC). Once in Bocas, we take care of the rest: ground and boat transfers are included.',
    'email.1.howtoget.p2': 'I would be happy to help you book domestic flights once your stay is confirmed. Sin cargo por gestion, unicamente el costo de los boletos.',
    'email.1.closing.p1': 'When you are ready to reserve, just indicate to me which villa you would like, and I will gladly secure it for you. I will also be available to assist you at each step, making the process simple and stress free so that you can focus on planning your perfect stay.',
    'email.1.closing.p2': 'All the best,',
    'email.1.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
    'email.2.p1': 'Hello [Lead Name],',
    'email.2.p2': 'Thank you for your interest in Nayara Bocas del Toro Resort. Your private island getaway awaits, and I am here to help with every step until you are stepping into the ocean.',
    'email.2.p3': 'From the moment you touch down in the country, I can take care of the rest, helping with transport to the breathtaking shores of Bocas del Toro, along with booking tours, reservations and excursions. I also offer round the clock support, and I can answer any questions you may have over talk, text, chat or email.',
    'email.2.p4': 'There is a lot to fall in love with here at Bocas del Toro, and while we cannot cover it all in one email, you might be interested in:',
    'email.2.section1': '<strong>The Unforgettable Over-The-Water Experience</strong><br />There is a reason we have been named one of the Best New Hotels in the World (Afar Magazine) and one of the Best Beach Hotels of the World (Town and Country Magazine). Bocas del Toro is a tropical paradise like no other, and you can enjoy it in full from an overwater private pool villa with breathtaking views.',
    'email.2.section2': '<strong>The World\'s First Aerial Beach</strong><br />At Bocas del Toro, land and sea intermingle in surprising ways. You can descend the stairway from our legendary waterfront Tipsy Bar, dip in the warm, crystal clear waters of the Caribbean for an afternoon swim or a snorkel, and have small plates and cocktails waiting the moment you leave the water.',
    'email.2.section3': '<strong>Attentive and Personalized Service</strong><br />From private airport pickup to memorable seaside dining at the Elephant House restaurant, my mission here at Nayara Bocas del Toro is to help you create the vacation of your dreams from start to finish and every moment in between.',
    'email.2.closing.p1': 'Click the link below to reach out to me and book your private island resort vacation today.',
    'email.2.closing.p2': 'Best regards,',
    'email.2.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
    'email.3.p1': 'Hello [Lead Name],',
    'email.3.p2': 'I hope that this email finds you well. Things have been beautiful this year here at Nayara Bocas del Toro, and I would love to see you one day at our private island paradise nestled in the heart of the Caribbean.',
    'email.3.p3': 'Today, I am sharing a few more reasons to visit, including <a href="https://www.forbes.com/sites/petertaylor/2023/06/14/ive-traveled-to-six-continents-and-bocas-del-toro-panam-is-about-to-become-the-coolest-place-on-earth-heres-why/?sh=b4e73443d861" target="_blank" rel="noopener">why Forbes calls Bocas del Toro "the coolest place on Earth"</a>.',
    'email.3.section1': '<strong>The Unspoiled Natural Beauty</strong><br />Hidden white sand beaches, crystal clear waters and lush rainforests make this an idyllic setting for both relaxation and exploration, rich in wildlife like the three toed sloth.',
    'email.3.section2': '<strong>Exquisite Accommodations</strong><br />The world\'s first aerial beach, breathtaking ocean views, private pools and restorative massage and spa services available at your private terrace or our soothing indoor spa room.',
    'email.3.section3': '<strong>Unique Experiences</strong><br />Unforgettable adventures including snorkeling over vibrant coral reefs, sunset boat trips to see the dolphins and time to immerse yourself in the authentic local culture of Bocas Town.',
    'email.3.closing.p1': 'I look forward to welcoming you to our little piece of paradise at Nayara Bocas del Toro.',
    'email.3.closing.p2': 'Warm regards,',
    'email.3.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
    'email.4.p1': 'Hello [Lead Name],',
    'email.4.p2': 'This is [Agent Name] checking in from Nayara Bocas del Toro—your dedicated reservations specialist. I\'m here to make sure every detail of your arrival feels effortless, from right now until you step onto the island.',
    'email.4.p3': 'Here are just a few of the ways I can handle the details while you relax and soak in the magic of Nayara Bocas del Toro.',
    'email.4.section1': '<strong>Before You Arrive in the Country</strong><br />Looking for the best way to get here. I can guide you every step along the way, no matter where you are visiting from.',
    'email.4.list.item1': '<strong>Complimentary Airport Pickup</strong> - once you confirm your booking with me, simply provide your flight details, including arrival date and time. I will plan a smooth transition from the airport to our resort ending with a relaxing and beautiful private boat ride from Bocas Town to our Isla Frangipani.',
    'email.4.list.item2': '<strong>Warm Welcome</strong> - as you step foot onto the resort, our friendly staff will be there to greet you, transport your luggage to your villa and give you a tour so you can settle in for the vacation of your dreams.',
    'email.4.list.item3': '<strong>Personalized assistance</strong> - if you want to explore the surrounding islands and hidden white sand beaches or catch a peek at underwater sights like coral and starfish, our expert concierge will guide you every step of the way.',
    'email.4.closing.p1': 'It is an honor to share Bocas del Toro with our guests at our luxury over the water resort, and we work every moment of your stay to inspire and delight.',
    'email.4.closing.p2': 'I hope to see you soon.',
    'email.4.closing.p3': 'Sincerely,',
    'email.4.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
    'email.5.p1': 'Hi [Lead Name],',
    'email.5.p2': 'It is a true gift to live on the many islands of Bocas del Toro, where the land and the sea provide fresh, delicious ingredients right at your doorstep.',
    'email.5.p3': 'For this reason, your dining experience at Nayara Bocas del Toro with our concepts <em>The Elephant House</em> and <em>The Coral Cafe</em> foregoes traditional all inclusive fare in favor of local, farm fresh ingredients and regional seafood sourced from Bocas del Toro fishermen.',
    'email.5.p4': 'The menu combines classic staples with fresh ingredients caught and cultivated daily, so you can begin your mornings with eggs Benedict and mango mimosas, then take a relaxing break in the afternoon to enjoy traditional English tea or handmade patacones for a snack and then sample a fresh tropical seafood dish from our dynamic menu in the evening.',
    'email.5.p5': 'And that is just a taste of what awaits you. Click the link below to book your stay at Nayara Bocas del Toro and sink your teeth into a carefully crafted Caribbean culinary atmosphere unlike any other.',
    'email.5.p6': 'Book your stay at Nayara Bocas del Toro today and experience unforgettable dining.',
    'email.5.closing.p1': 'With warm regards,',
    'email.5.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
    'email.6.p1': 'Hi [Lead Name],',
    'email.6.p2': 'The waters and islets of Bocas del Toro beckon to be explored, and there is no better place to set out than right from our idyllic waterfront setting.',
    'email.6.p3': 'Our villas provide direct access to fantastic swimming and snorkeling opportunities, and you can also explore the Caribbean waters surrounding our island via kayak or paddleboard.',
    'email.6.p4': 'Nayara Bocas del Toro\'s cerulean waters are warm year round, but if you prefer a break from the salt and the surf, our stunning clubhouse pool is a serene oasis of freshwater to relax, unwind and sunbathe.',
    'email.6.p5': 'The small islands of our Caribbean home play host to a variety of sea life, including hundreds of species of fish and even pods of dolphins.',
    'email.6.p6': 'If you are ready to join us, you can click the link below to start planning your Nayara Bocas del Toro adventure today.',
    'email.6.closing.p1': 'See you soon,',
    'email.6.closing.signature': '[Agent Name]<br />Reservations Specialist<br />Live chat with me here | WhatsApp +507 6954 5262<br />Panama +507 838 8362 | Toll Free USA: 888 332 2961',
  },
  es: {
    'title': 'Nayara Bocas del Toro - Rediseño del Drip Campaign',
    'subtitle':
      'Comienza revisando las 4 diapositivas de propuesta. Después de la diapositiva 4, haz clic en "Ver copia de correos de propuesta" para ver la secuencia completa de 6 correos lado a lado. Selecciona cualquier texto para agregar comentarios.',
    'language.toggle': 'Switch to English',
    'welcome.title': '¡Bienvenido!',
    'welcome.intro': 'Selecciona cualquier texto del deck para dejar comentarios contextuales. Cuéntanos quién eres.',
    'welcome.step1': 'Resalta cualquier frase o párrafo dentro de los correos.',
    'welcome.step2': 'Usa el botón flotante “Añadir comentario” junto a tu selección.',
    'welcome.step3': 'Pasa el cursor sobre los resaltados para leer las notas guardadas del equipo.',
    'welcome.cta': 'Comenzar',
    'welcome.firstName': 'Nombre',
    'welcome.lastName': 'Apellido',
    'welcome.firstNamePlaceholder': 'Nombre',
    'welcome.lastNamePlaceholder': 'Apellido',
    'comments.instructions':
      '<strong>Comentarios:</strong> Selecciona texto en los correos y luego haz clic en el botón flotante para añadir tu nota con nombre y apellido. Pasa el cursor sobre los resaltados para leer los comentarios guardados.',
    'comments.floatingButton': 'Añadir comentario',
    'comments.modalTitle': 'Añadir comentario',
    'comments.selectedTextLabel': 'Texto seleccionado:',
    'comments.selectedTextNone': 'Ninguno',
    'comments.firstName': 'Nombre',
    'comments.lastName': 'Apellido',
    'comments.firstNamePlaceholder': 'Nombre',
    'comments.lastNamePlaceholder': 'Apellido',
    'comments.commentLabel': 'Comentario',
    'comments.commentPlaceholder': '¿Qué deberíamos mejorar?',
    'comments.save': 'Guardar',
    'comments.cancel': 'Cancelar',
    'feedback.selectText': 'Selecciona un texto dentro de la columna de correos antes de guardar un comentario.',
    'feedback.wrongColumn': 'Sólo puedes comentar sobre los correos.',
    'feedback.saved': 'Comentario guardado correctamente.',
    'feedback.cancelled': 'Comentario cancelado.',
    'feedback.namesRequired': 'Nombre y apellido son obligatorios.',
    'feedback.commentRequired': 'El comentario no puede estar vacío.',
    'deck.status': (current, total) => `Slide ${current} de ${total}`,
    'deck.status.email': (current, total) => `Correo ${current} de ${total}`,
    'subtitle.split':
      'Izquierda: Diapositivas de propuesta con hallazgos y recomendaciones. Derecha: Secuencia completa de 6 correos en voz del agente. Selecciona cualquier texto para agregar comentarios.',
    'slides.left.1.title': 'Contexto y Problema',
    'slides.left.1.section1': 'Configuración actual',
    'slides.left.1.section2': 'Problemas resultantes',
    'slides.left.1.item1':
      '<strong>Dos rutas de inscripción:</strong> Dos formularios en nuestro sitio web—<span data-form="geo">Obtener Ofertas Exclusivas (formulario GEO)</span> y <span data-form="yna">Necesitas Asistencia (formulario YNA)</span>—alimentan la misma secuencia automatizada de correos.',
    'slides.left.1.item2':
      '<strong>Automatización + seguimiento humano:</strong> <span data-form="geo,yna">Ambos formularios</span> inscriben automáticamente a los leads en la campaña de goteo heredada mientras los agentes lanzan simultáneamente su alcance manual.',
    'slides.left.1.item3': '<strong>Contacto de alto toque:</strong> Los agentes envían correos, mensajes de texto y llaman en cuestión de minutos después de cada envío de formulario, como lo espera el liderazgo.',
    'slides.left.1.item4': 'Los leads reciben mensajes superpuestos del Correo 1 (automatizado + manual) entregados casi simultáneamente.',
    'slides.left.1.item5': 'La voz no es consistente (buzón del equipo vs identidad del agente individual), creando expectativas mixtas.',
    'slides.left.1.item6': 'La experiencia se siente desordenada para un huésped de lujo aunque la intensidad del seguimiento sea alta.',
    'slides.left.2.title': 'Hallazgos Clave',
    'slides.left.2.item1': 'El primer correo manual usado por los agentes—refinado por Kelly con el tiempo—puede parecer un poco pesado para un primer contacto, pero ha demostrado generar respuestas rápidas incluso bajo nuestra configuración de comunicación desordenada anterior.',
    'slides.left.2.item2': 'Dan espera un alcance muy proactivo: contacto inmediato por correo, SMS y teléfono cuando llega un lead.',
    'slides.left.2.item3': 'Los huéspedes que llenan el <span data-form="yna">formulario YNA</span> a menudo comparten fechas y necesidades específicas, y esperan ayuda individualizada en lugar de un mensaje estilo folleto genérico.',
    'slides.left.2.item4': 'El problema principal no es el nivel de contacto sino la falta de orquestación y voz consistente.',
    'slides.left.3.title': 'Flujo Propuesto (GEO vs YNA)',
    'slides.left.3.section1': '<span data-form="geo">Obtener Ofertas Exclusivas (formulario GEO)</span>',
    'slides.left.3.section2': '<span data-form="yna">Necesitas Asistencia (formulario YNA)</span>',
    'slides.left.3.item1': 'Mantener la inscripción automática en la campaña de goteo, pero reemplazar el Correo 1 antiguo con el nuevo primer correo probado creado por Kelly.',
    'slides.left.3.item2': 'El Correo 1 presenta al agente asignado, presenta la promoción clave actual y la tabla de tarifas, y proporciona pasos claros siguientes.',
    'slides.left.3.item3': 'Los Correos 2 a 6 siguen automáticamente como seguimiento, todos enviados desde la misma dirección de correo del agente asignado.',
    'slides.left.3.item4': 'La sección de ofertas promocionales solo necesita actualizaciones periódicas, coordinadas por el equipo de ventas con nuestro proveedor de HubSpot.',
    'slides.left.3.item5': 'No enviar el Correo 1 automáticamente.',
    'slides.left.3.item6': 'El agente lee los detalles del formulario y envía una versión personalizada del Correo 1 manualmente, usando la misma estructura probada pero adaptada a las fechas y preguntas específicas del huésped.',
    'slides.left.3.item7': 'Después de enviar el Correo 1 personalizado, el agente inscribe al contacto en la campaña automatizada de goteo comenzando en el Correo 2.',
    'slides.left.4.title': 'Justificación y Próximos Pasos',
    'slides.left.4.section1': 'Por qué funciona',
    'slides.left.4.section2': 'Notas de implementación',
    'slides.left.4.item1': 'Un concepto principal de primer correo para <span data-form="geo,yna">ambos formularios</span>, alineado con lo que los agentes ya saben que funciona bien.',
    'slides.left.4.item2': 'Todos los correos ahora hablan con la misma voz centrada en el agente: yo, mí, mi, y vías de contacto claras.',
    'slides.left.4.item3': 'Mantiene el seguimiento agresivo pero elimina la confusión para el huésped.',
    'slides.left.4.item4': 'En HubSpot, mapear <span data-form="geo">GEO</span> a la secuencia automatizada de 6 correos comenzando en el nuevo Correo 1.',
    'slides.left.4.item5': 'Para <span data-form="yna">YNA</span>, proporcionar a los agentes una plantilla lista para el Correo 1 y una forma simple de comenzar la secuencia en el Correo 2.',
    'slides.left.4.item6': 'Asegurar que los flujos de trabajo dejen de enviar tan pronto como un lead responda a través de cualquier canal, o si el estado es Reservado / optó por no recibir.',
    'slides.left.tag.findings': 'SCREENSHOTS',
    'slides.left.tag.proposal': 'Propuesta',
    'slides.email.1.title': 'Correo 1 - Promociones Disponibles, Primer Contacto',
    'slides.email.2.title': 'Correo 2 - Escape a Isla Privada',
    'slides.email.3.title': 'Correo 3 - El Lugar Más Genial del Mundo',
    'slides.email.4.title': 'Correo 4 - Déjame Manejar los Detalles',
    'slides.email.5.title': 'Correo 5 - Un Sabor Fino y Fresco de Bocas del Toro',
    'slides.email.6.title': 'Correo 6 - Aventuras Te Esperan en Bocas del Toro',
    'slides.email.badge.new': 'Nuevo primer correo',
    'slides.email.badge.existing': 'Diseño existente, voz del agente',
    'slides.email.badge.minor': 'Diseño existente, ediciones menores de texto',
    'slides.email.meta.subject': 'Asunto:',
    'slides.email.1.section.rates': 'Resumen de tarifas de ejemplo',
    'slides.email.1.section.policies': 'Políticas - Ahorros de Temporada Alta',
    'slides.email.1.section.allinclusive': 'Experiencia todo incluido',
    'slides.email.1.section.howtoget': 'Cómo llegar',
    'slides.email.cta.contactme': 'Contáctame',
    'slides.email.cta.contactus': 'Contáctanos',
    'slides.email.cta.contactusex': '¡Contáctanos!',
    'slides.email.cta.booknow': 'Reservar Ahora',
    'viewProposal.button': 'Ver propuesta de correos',
    'email.1.p1': 'Hola [Lead Name],',
    'email.1.p2': 'Mi nombre es [Agent Name], Especialista en Reservaciones en Nayara Bocas del Toro. Estoy aquí para hacer que la planificación de tu viaje sea simple y asegurar que todo esté perfectamente organizado para tu estadía.',
    'email.1.p3': '<strong>Ahorros de Temporada – Especial de Temporada Alta</strong><br />Disfruta 30% de descuento (antes de impuestos) en estadías hasta el 19 de diciembre de 2025.',
    'email.1.rate.note1': 'Por noche por pareja.',
    'email.1.rate.note2': '<em>Nota:</em> Un tercer huésped puede ser acomodado en las Villas Sobre el Agua con una cama adicional: USD 161.40 por noche (impuestos incluidos). La mejor tarifa está garantizada cuando reservas directamente por correo o teléfono.',
    'email.1.policies.item1': 'Período de Viaje: 20 de noviembre - 19 de diciembre, 2025',
    'email.1.policies.item2': 'Fechas Bloqueadas: 24 - 30 de noviembre, 2025 (Semana de Acción de Gracias)',
    'email.1.policies.item3': 'Depósito: 100 por ciento al momento de la reserva',
    'email.1.policies.item4': 'Cancelación: No aplica (no reembolsable)',
    'email.1.allinclusive.item1': 'Todas las comidas y bebidas',
    'email.1.allinclusive.item2': 'Servicio de villa y abastecimiento de snacks en la habitación',
    'email.1.allinclusive.item3': 'Kayaks, tablas de paddle, equipo de snorkel, acceso al gimnasio',
    'email.1.allinclusive.item4': 'Asistencia del conserje para reservas de actividades y tratamientos de spa',
    'email.1.allinclusive.item5': 'Actividades complementarias semanales',
    'email.1.allinclusive.item6': 'Traslados en bote hacia y desde el Aeropuerto de Bocas del Toro (BOC) para check in y check out',
    'email.1.allinclusive.item7': 'Internet inalámbrico de alta velocidad',
    'email.1.howtoget.p1': 'La mayoría de nuestros huéspedes llegan al Aeropuerto Internacional de Tocumen (PTY), luego toman un vuelo doméstico de 50 minutos desde el Aeropuerto Marcos A. Gelabert (PAC) al Aeropuerto de Bocas del Toro (BOC). Una vez en Bocas, nosotros nos encargamos del resto: los traslados terrestres y en bote están incluidos.',
    'email.1.howtoget.p2': 'Estaré encantado de ayudarte a reservar vuelos domésticos una vez que tu estadía esté confirmada. Sin cargo por gestión, únicamente el costo de los boletos.',
    'email.1.closing.p1': 'Cuando estés listo para reservar, solo indícame qué villa te gustaría, y con gusto la aseguraré para ti. También estaré disponible para asistirte en cada paso, haciendo el proceso simple y sin estrés para que puedas enfocarte en planificar tu estadía perfecta.',
    'email.1.closing.p2': 'Todo lo mejor,',
    'email.1.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
    'email.2.p1': 'Hola [Lead Name],',
    'email.2.p2': 'Gracias por tu interés en Nayara Bocas del Toro Resort. Tu escape a isla privada te espera, y estoy aquí para ayudar con cada paso hasta que estés pisando el océano.',
    'email.2.p3': 'Desde el momento en que aterrizas en el país, puedo encargarme del resto, ayudando con el transporte a las impresionantes costas de Bocas del Toro, junto con la reserva de tours, reservaciones y excursiones. También ofrezco soporte las 24 horas, y puedo responder cualquier pregunta que tengas por teléfono, texto, chat o correo.',
    'email.2.p4': 'Hay mucho de qué enamorarse aquí en Bocas del Toro, y aunque no podemos cubrirlo todo en un correo, podrías estar interesado en:',
    'email.2.section1': '<strong>La Experiencia Inolvidable Sobre el Agua</strong><br />Hay una razón por la que hemos sido nombrados uno de los Mejores Hoteles Nuevos del Mundo (Revista Afar) y uno de los Mejores Hoteles de Playa del Mundo (Revista Town and Country). Bocas del Toro es un paraíso tropical como ningún otro, y puedes disfrutarlo completamente desde una villa privada con piscina sobre el agua con vistas impresionantes.',
    'email.2.section2': '<strong>La Primera Playa Aérea del Mundo</strong><br />En Bocas del Toro, la tierra y el mar se entrelazan de maneras sorprendentes. Puedes descender la escalera desde nuestro legendario Tipsy Bar frente al mar, sumergirte en las cálidas y cristalinas aguas del Caribe para una tarde de natación o snorkel, y tener pequeños platos y cócteles esperando el momento en que salgas del agua.',
    'email.2.section3': '<strong>Servicio Atento y Personalizado</strong><br />Desde el traslado privado del aeropuerto hasta la memorable cena junto al mar en el restaurante Elephant House, mi misión aquí en Nayara Bocas del Toro es ayudarte a crear las vacaciones de tus sueños de principio a fin y cada momento intermedio.',
    'email.2.closing.p1': 'Haz clic en el enlace a continuación para contactarme y reservar tus vacaciones en el resort de isla privada hoy.',
    'email.2.closing.p2': 'Saludos cordiales,',
    'email.2.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
    'email.3.p1': 'Hola [Lead Name],',
    'email.3.p2': 'Espero que este correo te encuentre bien. Las cosas han estado hermosas este año aquí en Nayara Bocas del Toro, y me encantaría verte algún día en nuestro paraíso de isla privada enclavado en el corazón del Caribe.',
    'email.3.p3': 'Hoy, estoy compartiendo algunas razones más para visitar, incluyendo <a href="https://www.forbes.com/sites/petertaylor/2023/06/14/ive-traveled-to-six-continents-and-bocas-del-toro-panam-is-about-to-become-the-coolest-place-on-earth-heres-why/?sh=b4e73443d861" target="_blank" rel="noopener">por qué Forbes llama a Bocas del Toro "el lugar más genial del mundo"</a>.',
    'email.3.section1': '<strong>La Belleza Natural Intacta</strong><br />Playas de arena blanca ocultas, aguas cristalinas y selvas tropicales exuberantes hacen de esto un escenario idílico tanto para la relajación como para la exploración, rico en vida silvestre como el perezoso de tres dedos.',
    'email.3.section2': '<strong>Alojamientos Exquisitos</strong><br />La primera playa aérea del mundo, vistas impresionantes del océano, piscinas privadas y servicios de masaje y spa restaurativos disponibles en tu terraza privada o nuestra relajante sala de spa interior.',
    'email.3.section3': '<strong>Experiencias Únicas</strong><br />Aventuras inolvidables incluyendo snorkel sobre arrecifes de coral vibrantes, viajes en bote al atardecer para ver los delfines y tiempo para sumergirte en la auténtica cultura local de Bocas Town.',
    'email.3.closing.p1': 'Espero darte la bienvenida a nuestro pequeño pedazo de paraíso en Nayara Bocas del Toro.',
    'email.3.closing.p2': 'Saludos cordiales,',
    'email.3.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
    'email.4.p1': 'Hola [Lead Name],',
    'email.4.p2': 'Este es [Agent Name] contactándote desde Nayara Bocas del Toro—tu especialista en reservaciones dedicado. Estoy aquí para asegurarme de que cada detalle de tu llegada se sienta sin esfuerzo, desde ahora hasta que pises la isla.',
    'email.4.p3': 'Aquí hay solo algunas de las formas en que puedo manejar los detalles mientras te relajas y te sumerges en la magia de Nayara Bocas del Toro.',
    'email.4.section1': '<strong>Antes de Llegar al País</strong><br />Buscando la mejor manera de llegar aquí. Puedo guiarte en cada paso del camino, sin importar de dónde estés visitando.',
    'email.4.list.item1': '<strong>Traslado del Aeropuerto Complementario</strong> - una vez que confirmes tu reserva conmigo, simplemente proporciona los detalles de tu vuelo, incluyendo fecha y hora de llegada. Planearé una transición suave desde el aeropuerto hasta nuestro resort terminando con un relajante y hermoso viaje en bote privado desde Bocas Town hasta nuestra Isla Frangipani.',
    'email.4.list.item2': '<strong>Bienvenida Cálida</strong> - cuando pises el resort, nuestro personal amigable estará ahí para saludarte, transportar tu equipaje a tu villa y darte un recorrido para que puedas instalarte para las vacaciones de tus sueños.',
    'email.4.list.item3': '<strong>Asistencia personalizada</strong> - si quieres explorar las islas circundantes y las playas de arena blanca ocultas o echar un vistazo a las vistas submarinas como coral y estrellas de mar, nuestro conserje experto te guiará en cada paso del camino.',
    'email.4.closing.p1': 'Es un honor compartir Bocas del Toro con nuestros huéspedes en nuestro resort de lujo sobre el agua, y trabajamos cada momento de tu estadía para inspirar y deleitar.',
    'email.4.closing.p2': 'Espero verte pronto.',
    'email.4.closing.p3': 'Sinceramente,',
    'email.4.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
    'email.5.p1': 'Hola [Lead Name],',
    'email.5.p2': 'Es un verdadero regalo vivir en las muchas islas de Bocas del Toro, donde la tierra y el mar proporcionan ingredientes frescos y deliciosos justo en tu puerta.',
    'email.5.p3': 'Por esta razón, tu experiencia culinaria en Nayara Bocas del Toro con nuestros conceptos <em>The Elephant House</em> y <em>The Coral Cafe</em> renuncia a la comida tradicional todo incluido a favor de ingredientes locales frescos de granja y mariscos regionales obtenidos de pescadores de Bocas del Toro.',
    'email.5.p4': 'El menú combina elementos clásicos con ingredientes frescos capturados y cultivados diariamente, para que puedas comenzar tus mañanas con huevos Benedict y mimosas de mango, luego tomar un descanso relajante en la tarde para disfrutar té inglés tradicional o patacones hechos a mano para un bocadillo y luego probar un plato fresco de mariscos tropicales de nuestro menú dinámico en la noche.',
    'email.5.p5': 'Y eso es solo una muestra de lo que te espera. Haz clic en el enlace a continuación para reservar tu estadía en Nayara Bocas del Toro y hundir los dientes en una atmósfera culinaria caribeña cuidadosamente elaborada como ninguna otra.',
    'email.5.p6': 'Reserva tu estadía en Nayara Bocas del Toro hoy y experimenta una gastronomía inolvidable.',
    'email.5.closing.p1': 'Con saludos cordiales,',
    'email.5.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
    'email.6.p1': 'Hola [Lead Name],',
    'email.6.p2': 'Las aguas e islotes de Bocas del Toro invitan a ser explorados, y no hay mejor lugar para partir que desde nuestro escenario idílico frente al mar.',
    'email.6.p3': 'Nuestras villas proporcionan acceso directo a oportunidades fantásticas de natación y snorkel, y también puedes explorar las aguas del Caribe que rodean nuestra isla vía kayak o paddleboard.',
    'email.6.p4': 'Las aguas cerúleas de Nayara Bocas del Toro están cálidas todo el año, pero si prefieres un descanso de la sal y el surf, nuestra impresionante piscina del clubhouse es un oasis sereno de agua dulce para relajarte, descansar y tomar el sol.',
    'email.6.p5': 'Las pequeñas islas de nuestro hogar caribeño albergan una variedad de vida marina, incluyendo cientos de especies de peces e incluso manadas de delfines.',
    'email.6.p6': 'Si estás listo para unirte a nosotros, puedes hacer clic en el enlace a continuación para comenzar a planificar tu aventura en Nayara Bocas del Toro hoy.',
    'email.6.closing.p1': 'Nos vemos pronto,',
    'email.6.closing.signature': '[Agent Name]<br />Especialista en Reservaciones<br />Chatea conmigo aquí | WhatsApp +507 6954 5262<br />Panamá +507 838 8362 | Línea Gratuita USA: 888 332 2961',
  },
};

const STORAGE_KEYS = {
  language: 'nbdt-language',
  user: 'nbdt-user-profile',
};

const state = {
  language: 'en',
  user: null,
};

const formBoxMap = {};
const formPreviewData = {};
let formPreviewTooltip = null;
let imageModal = null;
let imageModalImage = null;
let formPreviewGlobalListenersAttached = false;

document.addEventListener('DOMContentLoaded', () => {
  state.language = loadLanguage();
  state.user = loadUser();
  applyLanguage(state.language);
  setupDeck('deck-left');
  setupDeck('deck-right');
  initLanguageToggle();
  initWelcomeModal();
  initComments();
  initImageFullscreen();
  initFormReferenceInteractions();
  refreshDeckStatuses();
  updateCarouselVisibility();
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
  deck.dataset.activeIndex = '0';

  const controls = document.querySelector(`.deck-controls[data-deck="${deckId}"]`);
  const statusEl = controls ? controls.querySelector('.deck-status') : null;
  updateDeckStatus(statusEl, index, slides.length, deckId);

  const buttons = document.querySelectorAll(`.nav-button[data-target="${deckId}"]`);
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Check if this is the "view-proposal" button
      if (btn.getAttribute('data-action') === 'view-proposal') {
        switchToSplitView();
        return;
      }
      
      const storedIndex = Number.parseInt(deck.dataset.activeIndex ?? `${index}`, 10);
      if (!Number.isNaN(storedIndex)) {
        index = storedIndex;
      }

      const direction = btn.getAttribute('data-direction') === 'next' ? 1 : -1;
      slides[index].classList.remove('active');
      index = (index + direction + slides.length) % slides.length;
      slides[index].classList.add('active');
      deck.dataset.activeIndex = String(index);
      updateDeckStatus(statusEl, index, slides.length, deckId);
      
      // Special handling for deck-left slide 4
      if (deckId === 'deck-left') {
        handleLeftDeckSlideChange(index, slides.length, null);
      }
    });
  });
  
  // Initialize button state for deck-left
  if (deckId === 'deck-left') {
    handleLeftDeckSlideChange(0, slides.length, null);
  }
}

function handleLeftDeckSlideChange(currentIndex, totalSlides, clickedButton) {
  const controls = document.querySelector('.deck-controls[data-deck="deck-left"]');
  if (!controls) return;
  
  const nextBtn = controls.querySelector('.nav-button[data-direction="next"]');
  if (!nextBtn) return;
  
  // In split view, always show arrow instead of "See proposal email copy"
  if (!isViewModeFull()) {
    nextBtn.textContent = '▶';
    nextBtn.classList.remove('view-proposal');
    nextBtn.removeAttribute('data-action');
    return;
  }
  
  // If we're on slide 4 (index 3) in full view, change button to "See proposal email copy"
  if (currentIndex === 3) {
    nextBtn.textContent = getString('viewProposal.button') || 'See proposal email copy';
    nextBtn.classList.add('view-proposal');
    nextBtn.setAttribute('data-action', 'view-proposal');
  } else {
    nextBtn.textContent = '▶';
    nextBtn.classList.remove('view-proposal');
    nextBtn.removeAttribute('data-action');
  }
}

function switchToSplitView() {
  const columns = document.querySelector('.columns');
  const screenshotsSidebar = document.querySelector('.screenshots-sidebar');
  if (!columns) return;

  columns.classList.remove('view-mode-full');
  columns.classList.add('view-mode-split');

  // Move sidebar into columns container for flex layout
  if (screenshotsSidebar && screenshotsSidebar.parentElement !== columns) {
    columns.appendChild(screenshotsSidebar);
    screenshotsSidebar.classList.add('show-emails');
    screenshotsSidebar.classList.remove('visible', 'hidden');
  }

  // Restore arrow button in split view (replace "See proposal email copy" if present)
  const leftDeckControls = document.querySelector('.deck-controls[data-deck="deck-left"]');
  if (leftDeckControls) {
    const nextBtn = leftDeckControls.querySelector('.nav-button[data-direction="next"]');
    if (nextBtn && nextBtn.getAttribute('data-action') === 'view-proposal') {
      const leftDeck = document.getElementById('deck-left');
      if (leftDeck) {
        const currentIndex = Number.parseInt(leftDeck.dataset.activeIndex || '0', 10);
        handleLeftDeckSlideChange(currentIndex, 4, null);
      }
    }
  }

  // Update subtitle
  const subtitle = document.querySelector('[data-i18n="subtitle"]');
  if (subtitle) {
    const splitSubtitleKey = state.language === 'es' ? 'subtitle.split' : 'subtitle.split';
    subtitle.textContent = getString(splitSubtitleKey) || (state.language === 'es' 
      ? 'Izquierda: Diapositivas de propuesta con hallazgos y recomendaciones. Derecha: Secuencia completa de 6 correos en voz del agente. Selecciona cualquier texto para agregar comentarios.'
      : 'Left: Proposal slides with findings and recommendations. Right: Complete 6-email sequence in agent voice. Select any text to add comments.');
  }

  clearFormBoxShakes();
  hideFormPreview();
  updateCarouselVisibility();
}

function initFormReferenceInteractions() {
  const references = document.querySelectorAll('[data-form]');
  if (!references.length) return;

  references.forEach((element) => {
    if (element.dataset.formListenerAttached === 'true') return;
    element.dataset.formListenerAttached = 'true';
    element.addEventListener('mouseenter', handleFormReferenceEnter);
    element.addEventListener('mouseleave', handleFormReferenceLeave);
    element.addEventListener('mousemove', handleFormReferenceMove);
    element.addEventListener('click', handleFormReferenceClick);
  });

  if (!formPreviewGlobalListenersAttached) {
    window.addEventListener('scroll', hideFormPreview, true);
    window.addEventListener('resize', hideFormPreview);
    formPreviewGlobalListenersAttached = true;
  }
}

function handleFormReferenceEnter(event) {
  const forms = parseFormDataset(event.currentTarget.dataset.form);
  if (!forms.length) return;

  if (isViewModeFull()) {
    addShakeForForms(forms);
  } else {
    showFormPreview(forms, event);
  }
}

function handleFormReferenceLeave(event) {
  const forms = parseFormDataset(event.currentTarget.dataset.form);
  if (!forms.length) return;

  if (isViewModeFull()) {
    removeShakeForForms(forms);
  } else {
    hideFormPreview();
  }
}

function handleFormReferenceMove(event) {
  if (isViewModeFull()) return;
  positionFormPreview(event);
}

function handleFormReferenceClick(event) {
  if (isViewModeFull()) return;
  event.preventDefault();
  event.stopPropagation();

  const forms = parseFormDataset(event.currentTarget.dataset.form);
  if (!forms.length) return;

  const targetForm = forms[0];
  const data = formPreviewData[targetForm];
  if (!data) return;
  hideFormPreview();
  openImageModal(data.src, data.alt || data.title || targetForm.toUpperCase());
}

function parseFormDataset(value = '') {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function isViewModeFull() {
  const columns = document.querySelector('.columns');
  return !columns || columns.classList.contains('view-mode-full');
}

function addShakeForForms(forms) {
  forms.forEach((form) => {
    const box = formBoxMap[form];
    if (box) box.classList.add('shake');
  });
}

function removeShakeForForms(forms) {
  forms.forEach((form) => {
    const box = formBoxMap[form];
    if (box) box.classList.remove('shake');
  });
}

function ensureFormPreviewTooltip() {
  if (!formPreviewTooltip) {
    formPreviewTooltip = document.createElement('div');
    formPreviewTooltip.className = 'form-preview-tooltip';
    document.body.appendChild(formPreviewTooltip);
  }
  return formPreviewTooltip;
}

function showFormPreview(forms, event) {
  const tooltip = ensureFormPreviewTooltip();
  const html = forms
    .map((form) => formPreviewData[form])
    .filter(Boolean)
    .map(
      (data) => `
        <div class="preview-item">
          <img src="${data.src}" alt="${data.alt}">
          <div class="preview-title">${data.title}</div>
        </div>`
    )
    .join('');

  if (!html) return;

  tooltip.innerHTML = html;
  tooltip.style.display = 'block';
  positionFormPreview(event);
}

function positionFormPreview(event) {
  if (!formPreviewTooltip || formPreviewTooltip.style.display !== 'block') return;
  const tooltip = formPreviewTooltip;
  const offset = 18;
  let left = event.clientX + offset;
  let top = event.clientY + offset;

  const rect = tooltip.getBoundingClientRect();
  if (left + rect.width > window.innerWidth - 16) {
    left = Math.max(16, window.innerWidth - rect.width - 16);
  }
  if (top + rect.height > window.innerHeight - 16) {
    top = Math.max(16, window.innerHeight - rect.height - 16);
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function hideFormPreview() {
  if (!formPreviewTooltip) return;
  formPreviewTooltip.style.display = 'none';
  formPreviewTooltip.innerHTML = '';
}

function clearFormBoxShakes() {
  Object.values(formBoxMap).forEach((box) => box.classList.remove('shake'));
}

function openImageModal(src, alt = '') {
  if (!imageModal || !imageModalImage || !src) return;
  imageModalImage.src = src;
  imageModalImage.alt = alt;
  imageModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  if (!imageModal) return;
  imageModal.classList.remove('active');
  document.body.style.overflow = '';
}

function initImageFullscreen() {
  const formBoxes = document.querySelectorAll('.findings-content .form-box');
  const modal = document.getElementById('image-fullscreen-modal');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const closeBtn = document.getElementById('image-modal-close');

  if (!modal || !fullscreenImage || !closeBtn) return;

  imageModal = modal;
  imageModalImage = fullscreenImage;

  Object.keys(formPreviewData).forEach((key) => {
    delete formPreviewData[key];
  });
  Object.keys(formBoxMap).forEach((key) => {
    delete formBoxMap[key];
  });

  formBoxes.forEach((box) => {
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      const imgSrc = box.dataset.imageSrc;
      const imgAlt = box.dataset.imageAlt || '';
      openImageModal(imgSrc, imgAlt);
    });

    const formType = (box.dataset.formType || '').trim();
    if (formType) {
      formBoxMap[formType] = box;
      const label = box.querySelector('.form-label');
      formPreviewData[formType] = {
        src: box.dataset.imageSrc,
        alt: box.dataset.imageAlt || '',
        title: label ? label.textContent.trim() : formType.toUpperCase(),
      };
    }
  });

  // Close on button click
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeImageModal();
  });

  // Close on background click (outside image)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeImageModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal?.classList.contains('active')) {
      closeImageModal();
    }
  });
}

function updateCarouselVisibility() {
  const columns = document.querySelector('.columns');
  const carousel = document.querySelector('.image-carousel');
  const screenshotsSidebar = document.querySelector('.screenshots-sidebar');
  if (!columns) return;

  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  hideFormPreview();
  clearFormBoxShakes();

  const isFullView = columns.classList.contains('view-mode-full');
  const isSplitView = columns.classList.contains('view-mode-split');

  if (!isDesktop) {
    if (carousel) {
      carousel.classList.remove('visible');
      carousel.classList.add('hidden');
      carousel.setAttribute('aria-hidden', 'true');
    }
    if (screenshotsSidebar) {
      screenshotsSidebar.classList.remove('visible', 'show-emails');
      screenshotsSidebar.classList.add('hidden');
      screenshotsSidebar.setAttribute('aria-hidden', 'true');
    }
    columns.style.paddingLeft = '';
    columns.style.paddingRight = '';
    return;
  }

  if (isFullView) {
    // Full view: show carousel and screenshots sidebar (with screenshots content)
    if (carousel) {
      carousel.classList.remove('hidden');
      carousel.classList.add('visible');
      carousel.setAttribute('aria-hidden', 'false');
    }
    if (screenshotsSidebar) {
      // Move sidebar back outside columns if needed
      const pageInner = document.querySelector('.page-inner');
      if (screenshotsSidebar.parentElement === columns && pageInner) {
        pageInner.insertBefore(screenshotsSidebar, columns);
      }
      screenshotsSidebar.classList.remove('hidden', 'show-emails');
      screenshotsSidebar.classList.add('visible');
      screenshotsSidebar.setAttribute('aria-hidden', 'false');
    }
  } else if (isSplitView) {
    // Split view: hide carousel, show sidebar with emails content
    if (carousel) {
      carousel.classList.remove('visible');
      carousel.classList.add('hidden');
      carousel.setAttribute('aria-hidden', 'true');
    }
    if (screenshotsSidebar) {
      // Ensure sidebar is inside columns for flex layout
      if (screenshotsSidebar.parentElement !== columns) {
        columns.appendChild(screenshotsSidebar);
      }
      screenshotsSidebar.classList.remove('hidden');
      screenshotsSidebar.classList.add('show-emails');
      screenshotsSidebar.setAttribute('aria-hidden', 'false');
    }
  }
}

function updateDeckStatus(statusEl, index, total, deckId) {
  if (!statusEl) return;
  statusEl.textContent = formatDeckStatus(index + 1, total, deckId);
}

function formatDeckStatus(current, total, deckId) {
  // Use "Email" for deck-right, "Slide" for deck-left
  if (deckId === 'deck-right') {
    const formatter = getString('deck.status.email');
    if (typeof formatter === 'function') {
      return formatter(current, total);
    }
    return `Email ${current} of ${total}`;
  }
  const formatter = getString('deck.status');
  if (typeof formatter === 'function') {
    return formatter(current, total);
  }
  if (typeof formatter === 'string') {
    return formatter.replace('{current}', current).replace('{total}', total);
  }
  return `Slide ${current} of ${total}`;
}

function activateSlideById(deckId, slideId) {
  if (!slideId) return -1;
  const deck = document.getElementById(deckId);
  if (!deck) return -1;

  const slides = deck.querySelectorAll('.slide');
  if (!slides.length) return -1;

  let targetIndex = -1;
  slides.forEach((slide, index) => {
    const isTarget = slide.dataset.slideId === slideId;
    slide.classList.toggle('active', isTarget);
    if (isTarget) {
      targetIndex = index;
    }
  });

  if (targetIndex >= 0) {
    deck.dataset.activeIndex = String(targetIndex);
    const controls = document.querySelector(`.deck-controls[data-deck="${deckId}"]`);
    const statusEl = controls?.querySelector('.deck-status');
    updateDeckStatus(statusEl, targetIndex, slides.length, deckId);
    if (deckId === 'deck-left') {
      handleLeftDeckSlideChange(targetIndex, slides.length, null);
    }
  }

  return targetIndex;
}

function focusEmailSlide(slideId) {
  const slide = document.querySelector(`.slide[data-slide-id="${slideId}"]`);
  if (!slide) return;

  slide.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  slide.classList.add('slide-highlight');
  setTimeout(() => {
    slide.classList.remove('slide-highlight');
  }, 900);
}

function initCarouselNavigation() {
  const carousel = document.querySelector('.image-carousel');
  if (!carousel) return;
  const items = carousel.querySelectorAll('.carousel-item');
  if (!items.length) return;

  const pause = () => carousel.classList.add('paused');
  const resume = () => carousel.classList.remove('paused');

  const activateFromItem = (item) => {
    const emailId = item.dataset.emailId;
    if (!emailId) return;
    pause();
    switchToSplitView();
    const index = activateSlideById('deck-right', emailId);
    if (index >= 0) {
      focusEmailSlide(emailId);
    }
    setTimeout(resume, 800);
  };

  items.forEach((item) => {
    item.addEventListener('mouseenter', pause);
    item.addEventListener('mouseleave', resume);
    item.addEventListener('focus', pause);
    item.addEventListener('blur', resume);
    item.addEventListener('click', (event) => {
      event.preventDefault();
      activateFromItem(item);
    });
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateFromItem(item);
      }
    });
  });
}

function initLanguageToggle() {
  const toggleBtn = document.getElementById('language-toggle');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    const next = state.language === 'en' ? 'es' : 'en';
    saveLanguage(next);
    applyLanguage(next);
  });
}

function initWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  const form = document.getElementById('welcome-form');
  if (!modal || !form) return;

  if (state.user) {
    modal.hidden = true;
    prefillCommentForm();
  } else {
    modal.hidden = false;
    const firstInput = form.elements.firstName;
    if (firstInput) firstInput.focus();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = form.elements.firstName.value.trim();
    const lastName = form.elements.lastName.value.trim();

    if (!firstName || !lastName) {
      alert(getString('feedback.namesRequired'));
      return;
    }

    state.user = { firstName, lastName };
    saveUser(state.user);
    prefillCommentForm();
    modal.hidden = true;
  });
}

function prefillCommentForm() {
  const commentForm = document.getElementById('comment-form');
  if (!commentForm || !state.user) return;
  commentForm.elements.firstName.value = state.user.firstName;
  commentForm.elements.lastName.value = state.user.lastName;
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

  prefillCommentForm();
  let pendingSelection = null;

  const hideFloatingButton = () => {
    floatingBtn.hidden = true;
    floatingBtn.style.top = '-9999px';
    floatingBtn.style.left = '-9999px';
  };

  const showFloatingButton = (rect) => {
    // Position button always on top side of selected area, centered horizontally, with more spacing
    const buttonHeight = 32; // Approximate button height
    const buttonWidth = 120; // Approximate button width
    const spacing = 16; // Increased space between selection and button
    const top = Math.max(window.scrollY + rect.top - buttonHeight - spacing, window.scrollY + 8);
    // Center horizontally over the selection
    const left = window.scrollX + rect.left + (rect.width / 2) - (buttonWidth / 2);
    floatingBtn.style.top = `${top}px`;
    floatingBtn.style.left = `${left}px`;
    floatingBtn.hidden = false;
  };

  const clearSelection = () => {
    window.getSelection().removeAllRanges();
    pendingSelection = null;
    selectedTextBox.textContent = getString('comments.selectedTextNone');
  };

  const openModal = () => {
    if (!pendingSelection) return;
    selectedTextBox.textContent = `"${pendingSelection.text}"`;
    commentModal.hidden = false;
    commentForm.elements.firstName.focus();
    commentForm.elements.firstName.value = state.user?.firstName ?? commentForm.elements.firstName.value;
    commentForm.elements.lastName.value = state.user?.lastName ?? commentForm.elements.lastName.value;
    announce(feedback, '', false);
  };

  const closeModal = (messageKey, isError = false) => {
    commentModal.hidden = true;
    commentForm.reset();
    if (messageKey) {
      announce(feedback, getString(messageKey), isError);
    } else {
      announce(feedback, '', false);
    }
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
      announce(feedback, getString('feedback.wrongColumn'), true);
      return;
    }

    const range = selection.getRangeAt(0).cloneRange();
    const rect = range.getBoundingClientRect();
    if (!rect || (rect.top === 0 && rect.left === 0 && rect.width === 0 && rect.height === 0)) {
      hideFloatingButton();
      return;
    }

    const rangeInfo = serializeRange(range, slideEl);
    if (!rangeInfo) {
      hideFloatingButton();
      return;
    }

    pendingSelection = {
      slideId: slideEl.dataset.slideId,
      text: selectionText,
      rangeInfo,
      range,
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
      announce(feedback, getString('feedback.selectText'), true);
      return;
    }

    const firstName = commentForm.elements.firstName.value.trim();
    const lastName = commentForm.elements.lastName.value.trim();
    const commentText = commentForm.elements.comment.value.trim();

    if (!firstName || !lastName) {
      announce(feedback, getString('feedback.namesRequired'), true);
      return;
    }
    if (!commentText) {
      announce(feedback, getString('feedback.commentRequired'), true);
      return;
    }

    state.user = { firstName, lastName };
    saveUser(state.user);

    const fullName = `${firstName} ${lastName}`.trim();
    const color = generateColor(fullName);
    const payload = {
      slideId: pendingSelection.slideId,
      selectionText: pendingSelection.text,
      range: pendingSelection.rangeInfo,
      firstName,
      lastName,
      comment: commentText,
      color,
    };

    try {
      const response = await fetch('/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');

      if (!response.ok) {
        let errorMessage = getString('feedback.commentRequired');
        if (isJson) {
          try {
            const error = await response.json();
            errorMessage = error.message || errorMessage;
          } catch (e) {
            // Ignore JSON parse errors
          }
        } else {
          errorMessage = `Server error (${response.status}). Please check Railway logs.`;
        }
        throw new Error(errorMessage);
      }

      if (!isJson) {
        throw new Error('Server returned non-JSON response. Check Railway configuration.');
      }

      const savedComment = await response.json();
      savedComment.color = savedComment.color || color;
      savedComment.firstName = savedComment.firstName || firstName;
      savedComment.lastName = savedComment.lastName || lastName;
      savedComment.range = savedComment.range || payload.range;
      if (pendingSelection.range) {
        const immediateRange = pendingSelection.range.cloneRange();
        wrapRangeWithMark(immediateRange, savedComment);
      }
      applyCommentHighlight(savedComment);
      closeModal('feedback.saved');
    } catch (error) {
      console.error('Error saving comment:', error);
      const errorMsg = error.message || getString('feedback.commentRequired');
      announce(feedback, errorMsg, true);
    }
  });

  const cancelHandler = () => {
    closeModal('feedback.cancelled');
  };

  cancelBtn?.addEventListener('click', cancelHandler);
  modalCloseBtn?.addEventListener('click', cancelHandler);

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
    .then(async (res) => {
      if (!res.ok) {
        console.warn(`Failed to load comments: ${res.status}`);
        return [];
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('Server returned non-JSON response when loading comments');
        return [];
      }
      return res.json();
    })
    .then((comments) => {
      if (Array.isArray(comments)) {
        comments.forEach((comment) => {
          const fullName = `${comment.firstName || ''} ${comment.lastName || ''}`.trim();
          comment.color = comment.color || generateColor(fullName);
          applyCommentHighlight(comment);
        });
      }
    })
    .catch((error) => {
      console.warn('Could not load saved comments.', error);
    });
}

function reloadComments() {
  // Remove all existing comment highlights before reloading
  document.querySelectorAll('mark.commented').forEach((mark) => {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    }
  });

  // Reload and reapply all comments
  fetch('/comments')
    .then(async (res) => {
      if (!res.ok) {
        console.warn(`Failed to load comments: ${res.status}`);
        return [];
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('Server returned non-JSON response when loading comments');
        return [];
      }
      return res.json();
    })
    .then((comments) => {
      if (Array.isArray(comments)) {
        comments.forEach((comment) => {
          const fullName = `${comment.firstName || ''} ${comment.lastName || ''}`.trim();
          comment.color = comment.color || generateColor(fullName);
          applyCommentHighlight(comment);
        });
      }
    })
    .catch((error) => {
      console.warn('Could not reload comments after language change.', error);
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
    if (current.classList?.contains('slide') && current.dataset.slideId) {
      return current;
    }
    current = current.parentNode;
  }
  return null;
}

function announce(element, message, isError = false) {
  if (!element) return;
  element.textContent = message || '';
  element.style.color = isError ? '#b91c1c' : '#047857';
}

function applyCommentHighlight(comment) {
  if (!comment || !comment.slideId) return;
  if (document.querySelector(`mark.commented[data-comment-id="${comment.id}"]`)) {
    return;
  }
  const slide = document.querySelector(`.slide[data-slide-id="${comment.slideId}"]`);
  if (!slide) return;
  const range = createRangeFromComment(slide, comment);
  if (!range) return;
  wrapRangeWithMark(range, comment);
}

function wrapRangeWithMark(range, comment) {
  try {
    const fullName = `${comment.firstName || ''} ${comment.lastName || ''}`.trim();
    const color = comment.color || generateColor(fullName);
    
    // Create a function to create mark elements with consistent styling
    const createMark = () => {
      const mark = document.createElement('mark');
      mark.className = 'commented';
      mark.dataset.commentId = comment.id;
      mark.dataset.author = fullName || 'Reviewer';
      mark.dataset.comment = comment.comment;
      mark.style.backgroundColor = color;
      mark.style.color = '#111827';
      mark.style.padding = '2px 0';
      mark.style.borderRadius = '2px';
      mark.style.display = 'inline';
      return mark;
    };

    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;

    // Simple case: single text node
    if (startContainer === endContainer && startContainer.nodeType === Node.TEXT_NODE) {
      try {
        const mark = createMark();
        range.surroundContents(mark);
        range.detach();
        return;
      } catch (e) {
        // Fall through to multi-node handling
      }
    }

    // Complex case: range spans multiple nodes
    // We need to wrap each text node individually to preserve DOM structure
    const textNodes = [];
    const walker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node;
    while (node = walker.nextNode()) {
      const nodeRange = document.createRange();
      nodeRange.selectNodeContents(node);
      
      // Check if this text node intersects with our range
      const startComparison = range.compareBoundaryPoints(Range.START_TO_START, nodeRange);
      const endComparison = range.compareBoundaryPoints(Range.END_TO_END, nodeRange);
      
      if (startComparison <= 0 && endComparison >= 0) {
        // This node is fully or partially within our range
        textNodes.push({
          node,
          isStart: node === startContainer,
          isEnd: node === endContainer,
          startOffset: node === startContainer ? startOffset : 0,
          endOffset: node === endContainer ? endOffset : node.textContent.length
        });
      }
    }

    // Wrap each text node individually
    if (textNodes.length > 0) {
      // Process in reverse order to avoid offset issues
      for (let i = textNodes.length - 1; i >= 0; i--) {
        const { node, isStart, isEnd, startOffset: nodeStart, endOffset: nodeEnd } = textNodes[i];
        
        // Skip if the range is empty for this node
        if (nodeStart >= nodeEnd) continue;
        
        try {
          const nodeRange = document.createRange();
          nodeRange.setStart(node, nodeStart);
          nodeRange.setEnd(node, nodeEnd);
          
          const mark = createMark();
          nodeRange.surroundContents(mark);
          nodeRange.detach();
        } catch (e) {
          console.warn('Failed to wrap text node:', e);
        }
      }
      
      range.detach();
      return;
    }

    // Fallback: try extractContents
    try {
      const contents = range.extractContents();
      if (contents && contents.childNodes.length > 0) {
        const mark = createMark();
        mark.appendChild(contents);
        range.insertNode(mark);
        range.detach();
        return;
      }
    } catch (extractError) {
      console.warn('extractContents failed:', extractError);
    }
    
    range.detach();
  } catch (error) {
    console.warn('Error wrapping range with mark:', error);
  }
}

function createRangeFromComment(slideEl, comment) {
  if (!comment?.range) return null;
  const { startPath, endPath, startOffset, endOffset } = comment.range;
  if (!Array.isArray(startPath) || !Array.isArray(endPath)) {
    return null;
  }
  const startNode = resolveNodePath(slideEl, startPath);
  const endNode = resolveNodePath(slideEl, endPath);
  if (!startNode || !endNode) return null;
  const range = document.createRange();
  try {
    range.setStart(startNode, clampOffset(startNode, startOffset));
    range.setEnd(endNode, clampOffset(endNode, endOffset));
  } catch (error) {
    console.warn('Could not recreate range for comment', comment.id, error);
    return null;
  }
  return range;
}

function clampOffset(node, offset = 0) {
  if (node.nodeType === Node.TEXT_NODE) {
    return Math.max(0, Math.min(offset, node.textContent?.length ?? 0));
  }
  return Math.max(0, Math.min(offset, node.childNodes?.length ?? 0));
}

function getNodePath(node, root) {
  const path = [];
  let current = node;
  while (current && current !== root) {
    const parent = current.parentNode;
    if (!parent) break;
    const index = Array.prototype.indexOf.call(parent.childNodes, current);
    path.unshift(index);
    current = parent;
  }
  return current === root ? path : null;
}

function resolveNodePath(root, path) {
  let current = root;
  for (const index of path) {
    current = current?.childNodes?.[index];
    if (!current) return null;
  }
  return current;
}

function generateColor(name) {
  const input = (name || '').toLowerCase().trim() || 'reviewer';
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 80%, 80%)`;
}

function loadLanguage() {
  return window.localStorage.getItem(STORAGE_KEYS.language) || 'en';
}

function saveLanguage(lang) {
  state.language = lang;
  window.localStorage.setItem(STORAGE_KEYS.language, lang);
}

function loadUser() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.user);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn('Could not parse stored user profile.', error);
    return null;
  }
}

function saveUser(user) {
  state.user = user;
  window.localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

function getString(key) {
  const langStrings = STRINGS[state.language] || {};
  if (langStrings[key] !== undefined) return langStrings[key];
  const defaultStrings = STRINGS.en || {};
  return defaultStrings[key];
}

function applyLanguage(lang) {
  state.language = lang;
  document.documentElement.lang = lang;

  // Force update all elements, including hidden ones
  // Use a more comprehensive approach to ensure all elements are updated
  const allElements = Array.from(document.querySelectorAll('[data-i18n]'));
  
  allElements.forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    
    const value = getString(key);
    if (value === undefined || value === null) return;
    if (typeof value === 'function') return;
    
    // Always update, regardless of visibility
    try {
      if (/<\/?[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    } catch (e) {
      console.warn('Error updating element with key:', key, e);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = getString(key);
    if (value === undefined || value === null || typeof value === 'function') return;
    el.setAttribute('placeholder', value);
  });

  const toggleBtn = document.getElementById('language-toggle');
  if (toggleBtn) toggleBtn.textContent = getString('language.toggle');
  const floatingBtn = document.getElementById('comment-floating-btn');
  if (floatingBtn) floatingBtn.textContent = getString('comments.floatingButton');
  const selectedValue = document.getElementById('selected-text');
  if (selectedValue && (!selectedValue.textContent || selectedValue.textContent === 'None' || selectedValue.textContent === 'Ninguno')) {
    selectedValue.textContent = getString('comments.selectedTextNone');
  }
  const modalClose = document.getElementById('comment-modal-close');
  if (modalClose) modalClose.setAttribute('aria-label', getString('comments.cancel'));
  initFormReferenceInteractions();
  refreshDeckStatuses();
  
  // Reload and reapply comments after language change
  reloadComments();
}

function refreshDeckStatuses() {
  document.querySelectorAll('.deck-controls').forEach((control) => {
    const deckId = control.dataset.deck;
    const deck = document.getElementById(deckId);
    if (!deck) return;
    const slides = deck.querySelectorAll('.slide');
    if (!slides.length) return;
    const activeIndex = Array.from(slides).findIndex((slide) => slide.classList.contains('active'));
    const index = activeIndex >= 0 ? activeIndex : 0;
    const statusEl = control.querySelector('.deck-status');
    updateDeckStatus(statusEl, index, slides.length, deckId);
  });
}

function serializeRange(range, root) {
  const startPath = getNodePath(range.startContainer, root);
  const endPath = getNodePath(range.endContainer, root);
  if (!startPath || !endPath) return null;
  return {
    startPath,
    startOffset: range.startOffset,
    endPath,
    endOffset: range.endOffset,
  };
}

