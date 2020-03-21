from alpine
RUN apk add --update nodejs npm
RUN apk add --update bash

WORKDIR /var/www/yapp/server
COPY server ./
COPY server/node_modules ./node_modules
COPY ./dist/prevent-corona ./client
EXPOSE 8000
CMD node server.js
