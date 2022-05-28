FROM nginx:stable-alpine
COPY /asador/build/ /usr/share/nginx/html
#COPY ./../cert.crt /etc/nginx/
#COPY ./../key.pem /etc/nginx/
#COPY default.conf /etc/nginx/default

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




