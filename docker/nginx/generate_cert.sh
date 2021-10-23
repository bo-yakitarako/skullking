#!/bin/bash

# [CA作成]
mkdir ./skullkingCA;
cd ./skullkingCA;
echo "01" > serial;
touch index.txt;
openssl genrsa -out ./ca.key 2048;
openssl req -new -key ca.key -out ca.csr -subj '/C=JP/ST=Skullking/L=Mermaid/O=Skullking Pirates inc./OU=Oreore Gr./CN=skullking-ca';
openssl x509 -sha256 -days 3650 -in ./ca.csr -req -signkey ./ca.key -out ca.crt;
openssl x509 -in ca.crt -text;
openssl x509 -inform PEM -outform DER -in ca.crt -out ca.der;

# [証明書作成]
mkdir ../ssl;
cd ../ssl;

openssl genrsa -out server.key 2048;
openssl req -new -sha256 -key server.key -out server.csr -subj "/C=JP/ST=Skullking/L=Mermaid/O=Skullking Pirates inc./CN=skullking";
openssl req -noout -in server.csr -text;

yes | openssl ca -config <(cat ../openssl.cnf <(printf "\n[usr_cert]\nsubjectAltName=DNS:skullking,DNS:\*.skullking\nextendedKeyUsage=critical,timeStamping,serverAuth,clientAuth,codeSigning")) -keyfile ../skullkingCA/ca.key -outdir ./ -cert ../skullkingCA/ca.crt -in server.csr -out server.crt -days 820 -md sha256;

openssl x509 -in server.crt -text;
