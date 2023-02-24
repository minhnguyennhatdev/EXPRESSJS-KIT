FROM node:latest

RUN pwd && ls

# Create app directory
RUN mkdir -p /usr/src/demo
WORKDIR /usr/src/demo

# Install app dependencies
COPY ../package.json /usr/src/demo/
RUN yarn

# Bundle app source
COPY ../. /usr/src/demo

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]