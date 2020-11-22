# Obtener la última version de nodejs
FROM node:latest
# Crea y Moverse para el directorio creado anteriormente "zoologico_ac"
WORKDIR /zoologico_ac
# Installar nodemon de forma global
RUN npm install nodemon -g
# Agregar el archivo package.json desde mi proyecto para el directorio en el docker
COPY package.json .
# Installar los paquetes de forma interna
RUN npm install
# Agregar el archivo nodemon.json desde mi proyecto para el directorio en el docker
COPY nodemon.json .
# Copiar el resto de archivos de la aplicación
COPY . .
# Exponer el puerto 8080 del docker
EXPOSE 8080
# Iniciar la aplicación cuando se inicia el contenedor
CMD nodemon -L --watch . server.js
# Por último correr el script
# CMD node server.js
# CMD node server.js