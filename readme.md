## La receta para instalar

Instalar dependencias con
```
npm install
```

Ahora, antes de correr se necesita un archivo llamado **knexfile.js** en la carpeta raíz del proyecto con los datos de la conexión a la base de datos de mysql.

```
module.exports = {
    development: {
        client: 'mysql',
        connection: {
        host: //datos del host,
        user: //datos del usuario,
        password: //password,
        database: 'blog'
        }
    }
};
```

También es necesario un archivo .env en la carpeta raíz.

```
NODE_ENV=development
```

Para correr la migración y el seeder:

Si knex no está instalado globalmente, se puede instalar con el comando
```
npm install knex -g
```

Crear primero una base de datos llamada **blog** en mysql, después ejecutar la migración y el seeder en el directorio raíz:
```
knex migrate:latest
knex seed:run
```

Esto poblará a la aplicación con tres posts prueba.

## Para correr

Primero levantar servidor con
```
npm start
```
Está configurado para el puerto 3000.

Luego ya se puede levantar la aplicación de react del repo de frontend
https://github.com/ilovecookiez11/blog-frontend
```
npm run dev
```