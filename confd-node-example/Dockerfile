FROM node:10-alpine

#WORKDIR /confd-example
WORKDIR /


COPY package.json .
RUN npm install --progress=false
COPY . .

#npm install eyal

RUN apk update && \
  apk add ca-certificates wget



RUN mkdir -p /etc/confd/{conf.d,templates}

# Add templates
COPY confd/ /etc/confd/

COPY my-config.json tmp/
#npm install express
#npm install eyal
#npm install config-watch


#RUN mkdir -p /etc/confd/{conf.d,template}
#COPY ./confd/template/template.conf.tmpl /etc/confd/template/
#COPY ./confd/conf.d/template.toml /etc/confd/conf.d/template.toml


COPY ./docker-entrypoint.sh /var/local/
RUN chmod a+x /var/local/docker-entrypoint.sh

ENTRYPOINT ["/var/local/docker-entrypoint.sh"]
