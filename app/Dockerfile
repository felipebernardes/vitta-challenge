FROM node:8.2.1-slim

RUN set -x \
    && apt-get update \
    && apt-get -y install postgresql postgresql-contrib \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && mkdir /src \
    && mkdir /logs \
    && cd /src \
    && npm install --silent

WORKDIR /src

EXPOSE 8888

CMD npm start
