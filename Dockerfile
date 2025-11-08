FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (use npm install if package-lock.json is missing)
RUN npm install --production --omit=dev || npm install --production

# Copy all project files
COPY . .

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Start the Node.js server (NOT a static site)
CMD ["node", "server.js"]

