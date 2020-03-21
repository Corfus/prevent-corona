from alpine
RUN apk add --update nodejs npm
RUN apk add --update bash

WORKDIR /var/www/yapp/server
COPY server ./
COPY ./dist/prevent-corona ./client
EXPOSE 8000
CMD node server.js
