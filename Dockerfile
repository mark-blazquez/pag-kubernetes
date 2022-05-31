FROM nginx:stable-alpine
COPY /asador/build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/
COPY ./src/certificados/node-cert.pem /etc/ssl/
COPY ./src/certificados/node-key.pem  /etc/ssl/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]




