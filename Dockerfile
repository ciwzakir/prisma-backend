FROM  node:20.11.1-alpine
WORKDIR /app
COPY . .
RUN yarn install
COPY .env .env
RUN yarn build
EXPOSE 4000
RUN [ "chmod", "+x", "./entrypoint.sh" ]
ENTRYPOINT [ "sh", "./entrypoint.sh" ]