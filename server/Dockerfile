FROM node:12.3.1-alpine
ADD ./ /server
WORKDIR /server
RUN npm install
EXPOSE 3000
CMD ["npm","start"]