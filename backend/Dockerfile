FROM node:20-bookworm-slim

# Install clang, clang++, and build essentials for C and C++ code execution
RUN apt-get update && apt-get install -y --no-install-recommends \
    clang \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies first (leverages Docker layer cache)
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the backend source code
COPY . .

# Default Cloud Run port
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD ["node", "server.js"]