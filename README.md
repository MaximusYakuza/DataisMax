Prueba técnica — React developer
Objetivo
El objetivo de esta prueba técnica es que el candidato muestre sus habilidades con las herramientas que utilizará luego en su trabajo diario en chedoc. Está diseñado para verificar las habilidades de desarrollo front-end utilizando React y su capacidad para resolver problemas.

Pondremos el foco en obtener un código simple, bien diseñado y organizado, eficaz y testeado, así como el cumplimiento de todos los requerimientos solicitados.

Desarrollo del proyecto
Se deberá clonar este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisaremos.
Se pueden utilizar herramientas como create-react-app y similares para inicializar el proyecto.

Prueba técnica
Usando la estructura vista en las imágenes proporcionadas como referencia, deberá crear un conjunto de pantallas y componentes React para crear la aplicación solicitada.

Se deberá incluir también README con instrucciones de configuración/ejecución y cualquier prueba u otra documentación que haya creado como parte de su solución.

Además, agregue la siguiente información a su archivo README:

¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
Se decidió emplear JavaScript en la realización de este proyecto debido a mi conocimiento previo del lenguaje, el cual estoy estudiando actualmente. Además, encontré que esta opción resultaba más conveniente gracias a sus elementos dinámicos, los cuales contribuyen a agilizar y proteger los procesos y el contenido de la página, facilitando su estructuración.
¿Hay alguna mejora que pueda hacer en su envío?
Aunque las imágenes lucen increíbles, y lo que podría afectar su presentación visual al paso del tiempo. En caso de tener la oportunidad, las renovaría para garantizar una experiencia aún más cautivadora. Además, considero que la página podría ampliarse aún más en el futuro. Sería beneficioso explorar la posibilidad de añadir nuevas funcionalidades y filtros adicionales para mejorar la precisión de las búsquedas, lo que sin duda enriquecería la experiencia del usuario.
¿Qué haría de manera diferente si se le asignara más tiempo?
Si dispusiera de más tiempo, consideraría la implementación de un framework como Angular para optimizar la organización y el control del proyecto. Además, me enfocaría en mejorar y asegurar la efectividad de los filtros, especialmente el filtro por año, para garantizar una experiencia más sólida para los usuarios.

Detalles
Necesitará construir las siguientes 3 páginas con React:

Una página de "Inicio"
Una página de "Series"
Una página "Películas"
Cree componentes para cada parte de la página (por ejemplo, encabezado, contenido, pie de página, etc.). Dentro de la carpeta /assets podrá encontrar distintas imágenes para utilizar.

Las páginas también deben poder utilizarse en dispositivos móviles.

Puede suponer que no tiene que admitir navegadores heredados sin funciones como fetch o flexbox.

Página de “Inicio”
Ejemplo de referencia screens/1-home.jpg.

Esta será su pantalla index.html.

Deberá mostrar 2 bloques que conectarán con las páginas de "Series" y "Películas".

Páginas de “Serie” y “Películas”
Ejemplo de referencia screens/2-series.jpg y screens/3-movies.jpg.

Para cada página debería leer los datos desde el archivo JSON feed/sample.json, luego:

Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
Mostrar sólo si contienen el atributo releaseYear >= 2010
Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico
Para la página de "Series" usar resultados con programType igual a series.
Para la página de "Películas" usar resultados con programType igual a movie.
Los atributos que debes utilizar para mostrar en la caja de cada resultado son:
title
images → Poster Art → url
Al posicionar el mouse sobre cada resultado la caja debe reducir su opacidad y mostrar borde blanco.
Al hacer click sobre el titulo deberá abrirse un popup mostrando la información completa:
title
description
releaseYear
images → Poster Art → url
Otras consideraciones
También necesitará manejar los estados de carga/loading y error de obtener los datos desde el archivo JSON:

Estado de "Carga/Loading" screens/1.1-loading.jpg
Estado de "Error" screens/1.2-error.jpg
Opcional
Filtro por año
agregar arriba del listado de series/películas un input que permita filtrar películas por año.
Paginación
agregar un selector de cantidad de resultados a mostrar (5, 10, 20)
permitir ir a próxima página de resultados o página anterior
permitir moverse de página en página utilizando un parámetro en la URL
Requisitos de Stack
Para el desarrollo de la aplicación deberá utilizar:

React / React Hooks
Redux
Librería de estilos (styled-components, CSS modules, o similar)
Mobile friendly
Unit tests (jest, react-testing-library, o similar)
Manejo de errores
(opcional) TypeScript
(opcional) Integration/E2E tests
(opcional) Deploy automático
(opcional) ...
Importante saber:

No es necesario crear un entorno de desarrollo/producción.
Se pueden utilizar otras librerías que crea conveniente, aunque se recomienda proporcionar una solución básica ajustada a lo solicitado, ya que nuestro objetivo principal es evaluar sus habilidades con React y Javascript.
Como empresa, creemos que la comunicación es la clave del éxito. Entonces, si algo no está claro, o si tiene dudas sobre la tarea, consultanos!
Happy coding!

