FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
ARG API_URL
ENV API_URL=${API_URL}

# Build application
RUN bun run build


EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "run", "start"]