FROM node:20 as build

WORKDIR app
EXPOSE 3000
COPY package.json /app/
RUN npm install

COPY . /app
RUN npm run build

CMD npm run start
