FROM  node:18

WORKDIR /josh/src/app

COPY package*.josn ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 4000
CMD ["node", "dist/main"]