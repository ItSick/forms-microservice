FROM node:alpine
LABEL developer="itsike@metropolinen.co.il"
COPY . /forms-microservice
COPY . ../forms-client-proxy
WORKDIR /forms-microservice
RUN npm install
RUN npm run start:dev
ENTRYPOINT [ "./src/main.ts" ]
