FROM node:12.16.3

RUN mkdir app
WORKDIR app
ADD . .
RUN yarn install

ENTRYPOINT ["yarn"]