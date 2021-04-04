FROM node:14.16.0-alpine3.10
WORKDIR /service
COPY . ./
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start" ]
