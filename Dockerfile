FROM node:20-alpine

WORKDIR /app

# Copy package files explicitly
COPY package.json ./
COPY package-lock.json* ./

# Install dependencies
RUN npm install --production --omit=dev

# Copy all project files
COPY . .

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Start the Node.js server (NOT a static site)
CMD ["node", "server.js"]

