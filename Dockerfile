FROM oven/bun

WORKDIR /app

COPY ./package*.json ./

RUN bun install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "bun", "run", "src/index.ts" ]
