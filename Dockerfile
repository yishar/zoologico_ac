# Obtener la última version de nodejs
FROM node:latest
# Creo un directorio "src" en mi docker
RUN mkdir /src
# Installar nodemon de forma global
RUN npm install nodemon -g
# Moverse para el directorio creado anteriormente "src"
WORKDIR /src
# Agregar el archivo package.json desde mi proyecto para el directorio en el docker
ADD package.json /src/package.json
# Installar los paquetes de forma interna
RUN npm install
# Agregar el archivo nodemon.json desde mi proyecto para el directorio en el docker
ADD nodemon.json /src/nodemon.json
# Bundle app source
COPY . /src
# Exponer el puerto 8080 del docker
EXPOSE 8080
# Por último correr el script
CMD nodemon server.js
# CMD node server.js