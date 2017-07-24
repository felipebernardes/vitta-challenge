FROM nginx

RUN apt-get update && apt-get install -y nginx
RUN rm -rf /etc/nginx/sites-enabled/default

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
