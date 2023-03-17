# PRUEBA TÉCNICA IPGLOBAL

Aplicación web desarrollada con Vite/React para IP Global utilizando la API de TheMovieDB.

Librerías principales utilizadas para el desarrollo:

        redux-toolkit
        react-slick
        @mui/material
        
Para testear se utilizó:

        react-testing-library
        msw
        cross-fetch

#

Para instalar todas las dependecias durante el desarrollo se utilizó yarn

#
#1 Clonar proyecto

    git clone https://github.com/gonzalezemma/ipglobal-technical-test.git

#2 Ir a develop

    git checkout develop

#3 instalar dependencias

    yarn install
    or
    npm install

#4 Ejecutar el proyectoen entorno de desarrollo

    yarn run dev
    or
    npm run dev

#5 Ejecutar todas las pruebas unitarias

    yarn test
    or
    npm test

#


En proyectos anteriores en los cuales participé siempre utilicé webpack como empaquetador, también realicé un proyecto con Nextjs. Por este motivo decidí utilizar Vite a modo de prueba y desafío.

Al iniciar realicé las primeras configuraciones como crear paths y armar la estructura básica del proyecto. También se instalaron algunas librerías como axios, material ui y redux-toolkit.

Paso siguiente se armó la estructura de redux y su store (slices y hooks) para luego envolver la app con este provider.
El primer slice fue para cambiar el "theme" de la app y poder pasar de oscuro a claro.

En esta instancia comencé con los primeros componentes, principalmente el layout para contener toda la aplicación y mantener un header. 
Luego cree la primera página que sería "Home" junto con el componente Router.

Con la Home ya creada voy a realizar la primera request a la API, para esto decido utilizar axios y react query. Cuando realizo la request y muestro la información me di cuenta que en algún punto iba a tener que guardar la información de las películas en la store de redux para mantener estos datos en otras rutas de la aplicación y así evitar requests innecesarios. 
Debido a esto, comienzo a leer documentación y encuentro que redux-toolkit contiene RTK Query que facilitaba todo el proceso descrito arriba, por lo que decido utilizar esta opción en lugar de axios y react query.

En este punto creo varios componentes para listar las películas mas populares, un carousel para mostrar al inicio, una lista con un grid que permite obtener mas mediante un boton y también la página "Movie" para mostrar la información completa de una película.

Luego al momento de realizar el post para poder puntuar la película pienso en varias opciones para conseguir el "guest_session_id" y decido crear un custom hook que realice esta request y almacene este id junto con algunos datos de usuario en el localstorage para luego poder utilizarlo al puntuar las películas. Además también guardo la fecha de expiración del id, el "theme" o modo y la lista de películas que se fueron puntuando.

Al final creo las páginas "MyList" y "Search", la primera para mostrar estas películas puntuadas que fueron almacnadas en el localstorage y la segunda para mostrar el resultado de la busqueda.

#
Puntos a tener en cuenta:

En el medio del proceso también instalé Storybook pero decidí eliminarlo porque no llegaba a realizar las stories de cada componente en este periodo de tiempo debido a que no es una librería que haya usado mucho. 

Es la primera vez que utilizo tanto Vite como RTKQuerys por lo que me llevo tiempo realizar muchas configuraciones y entender algunos procesos.

Tampoco llegue a realizar unit test a todos los componentes pero intenté realizar un ejemplo de cada tipo de prueba, simple como mostrar un texto y también con las diferentes querys.

#


Muchas gracias por la oportunidad!
