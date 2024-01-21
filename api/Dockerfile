# Stage 1: Build Stage
FROM node:18.16.0-alpine3.17 AS builder

# Set a non-root user for the build stage
RUN addgroup -g 1001 -S appuser && \
    adduser -u 1001 -S appuser -G appuser
USER appuser

WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Stage 2: Final Stage
FROM node:18.16.0-alpine3.17

# Set a non-root user for the final stage
RUN addgroup -g 1001 -S appuser && \
    adduser -u 1001 -S appuser -G appuser
USER appuser

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder --chown=appuser:appuser /app .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
