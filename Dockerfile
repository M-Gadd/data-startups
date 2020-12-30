FROM node:alpine

COPY ./ /app
#Prepare the client
WORKDIR /app/client
RUN yarn install --no-cache && yarn build && yarn global add serve

#Prepare the server
WORKDIR /app/server
RUN yarn install --no-cache
RUN yarn add node-pre-gyp

EXPOSE 5000

CMD [ "npm", "start", "index.js" ]
