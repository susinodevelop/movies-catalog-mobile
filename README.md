
# Movie Catalog App

Movie Catalog App es una aplicación de catálogo de películas que utiliza la API de [The Movie Database (TMDb)](https://www.themoviedb.org/) para mostrar información sobre diferentes películas, incluyendo títulos, descripciones, calificaciones y más.

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener los siguientes requisitos instalados:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/susinodevelop/movies-catalog-mobile.git
   cd movies-catalog-mobile
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:

   En la raíz del proyecto, crea un archivo llamado `.env` y añade la siguiente variable:

   ```bash
   THE_MOVIE_DB_API_KEY=tu_api_key_aqui
   ```

   Reemplaza `tu_api_key_aqui` con tu propia API Key de [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api).

   > **Nota:** Puedes obtener tu API Key registrándote en [The Movie Database (TMDb)](https://www.themoviedb.org/) y creando un proyecto de API.

   > **Nota:** Añadir también la api-key en el eas.json si se quiere hacer la build del proyecto.

4. Ejecuta la aplicación:

   ```bash
   npm start
   ```

   Esto abrirá el proyecto en Expo Go para su ejecución en un dispositivo o emulador.

## Uso

Una vez que la aplicación esté en funcionamiento, podrás:

- Explorar un catálogo de películas populares.
- Ver detalles de una película específica, incluyendo sinopsis, calificaciones, y más.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
