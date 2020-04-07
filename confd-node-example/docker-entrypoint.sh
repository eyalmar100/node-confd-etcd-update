#!/bin/sh

echo "downloading"
wget --quiet "https://github.com/kelseyhightower/confd/releases/download/v0.15.0/confd-0.15.0-linux-amd64"
mkdir -p /opt/confd/bin
mv "confd-0.15.0-linux-amd64" /opt/confd/bin/confd
chmod +x /opt/confd/bin/confd

export PATH="/opt/confd/bin/:$PATH"



npm install express
npm install eyal
npm install config-watch

confd -watch  -backend etcd -node=http://172.17.0.2:2379  &
# confd -onetime -backend   etcd -node =http://172.17.0.2:2379


npm start
