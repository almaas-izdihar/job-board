FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
# Generate Prisma Client
RUN bunx prisma generate

# Build application
RUN bun run build

# Run migrations (for production)
RUN bunx prisma migrate deploy

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "run", "start"]