# zoologico_ac
Gestión de un Zoológico que permita dar de alta, buscar, eliminar y actualizar información de los animales.

# Nota
Para ejecutar la base de datos con docker ejecutar el siguiente comando.
docker-compose up -d

Para connectarse a la base de datos ejecutar
mysql -h 127.0.0.1 -u root -P 3306 -p 123.anthony.123

# Instrucciones para levantar el servidor de NodeJs y la Base de datos en Docker

// REQUISITOS

- Docker
- NodeJs
- npm

1. Ir al directorio raiz del proyecto desde una terminal:

    - Ejecutar el archivo 1_start_container con bash o ejecutar el comando: docker-compose up -d
    - En este punto ya debería haberse creado un contenedor llamado  zoologico_ac_anthony_db_1

2. Directorio raiz y ejecutar el comando: npm install
para instalar todas las dependencias necesarias.

3. Directorio raiz y ejecutar el comando: node server.js
para iniciar el servidor

