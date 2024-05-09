FROM node:16


WORKDIR  /usr/src/app



COPY package*.json ./

RUN npm install




COPY server_get.js .

EXPOSE 3040
CMD [ "node", "server_get.js"]