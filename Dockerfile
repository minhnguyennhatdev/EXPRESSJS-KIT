FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/demo/auth-service
WORKDIR /usr/src/demo/auth-service

# Install app dependencies
COPY package.json /usr/src/demo/auth-service
RUN yarn

# Bundle app source
COPY . /usr/src/demo/auth-service
RUN yarn build

EXPOSE 3101
CMD [ "yarn", "start" ]