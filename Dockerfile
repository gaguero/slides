FROM node:20-alpine

WORKDIR /app

# Copy all files first to ensure package.json is available
COPY . .

# Install dependencies
RUN npm install --production --omit=dev

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Start the Node.js server (NOT a static site)
CMD ["node", "server.js"]

