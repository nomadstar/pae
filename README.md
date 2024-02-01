# PAE Mi manual del bebé

  ## Tabla de Contenidos
   - [Instalación](#inst)
   - [Código](#code)
   - [React](#react)
   - [Mejoras](#bett)
   - [Restante/faltante](#rest)

 ## Instalación

Para operar el proyecto mediante el localhost, simplemente se clona el repositorio con "git clone -repositorio-", se abre en un editor de texto y se instalan las dependencias con -npm install-, posteriormente se puede correr el servidor local con -npm run dev-, es posible ver los scripts en el package.json

En caso de ser necesario subir la página a internet de manera independiente, es posible utilizar Netlify.com de manera sencilla y rápida.

 ## Código

 El código está realizado en React utilizando Vite, además de HTML, Javascript y CSS (puro). El código se divide en pages, containers, components. En el archivo App es donde se tiene la página principal, con los contenedores. Existen comentarios en el código, debido a secciones que no están en uso, se detallan en la última sección.

 - Pages: Las páginas por las que el usuario puede viajar.
 - Containers: Son componentes que contienen otros componentes dentro.
 - Componentes: Funciones que entregan estructura HTML.

 "changeState": la mejor práctica es utilizar "set" en vez de "change", habría que cambiar cada palabra, pero el uso es el mismo.

 VS Code permite viajar a los demás componentes con CTRL + Clic, para poder saber de donde provienen y su orden.

 El componente -Checkout- es el botón que permite abrir Epyco, lo que se utiliza para pagar.

 - Archivos que no se están usando aún: Thanks.jsx, Profile.jsx, ProfileNav.jsx, Login.jsx, toda la carpeta -profile-. Además, existen secciones de código, sobre todo en el archivo FormularioPago, que no se están usando, debido a funcionalidades con Login o ciertos botones.

 El CSS está en diferentes archivos, se intenta mantener la menor cantidad de archivos .css, por lo que se importan menos veces y se juntan códigos. En el archivo -index.css- se tienen las variables del color base de la página y algunos que se han usado.

 La carpeta -assets- guarda las imágenes, que están en webp, bastante rápido de cargar, es necesario utilizar este formato. Se puede transformar a este tipo de archivo por la web (https://imagen.online-convert.com/es/convertir-a-webp)

 El código se ha limpiado lo máximo posible, intentando ocupar las mejores prácticas.

 ## React
 ¿Qué pasa si no se usar React?
 React es un framework de JS para el frontend, el cual está organizado en componentes, los cuales son funciones que retornar una sola etiqueta HTML, que dentro contiene contenido. La idea es dividir lo máximo posible el código para el orden y legibilidad, donde los containers contienen componentes dentro, y los componentes son la menor unidad. Todo se realiza con imports. 

 Estas funciones que retornar HTML, pueden recibir información específica para utilizarla, tal cual como una función y sus parámetros, los props. Estos se pasan cuando se llama el componente para renderizarse. 

 En la App se tienen las rutas que se acceden con Links. 

 Hay mucha información en internet, es fácil de comprender y realizar para desarrollo frontend, además, el uso de ChatGPT para entender el código y realizar consultas es muy eficiente, ya que tiene buen contenido de React.

 ## Mejoras

 - Es posible mejorar los archivos CSS, evitando la redundancia y organizar los archivos de mejor manera.
 - Responsive: es posible mejorar el responsive manejando CSS puro. También utilizar Bootstrap o Tailwind para evitar errores sería algo ideal.

 ## Restante/Faltante

 - Login: El código tiene comentado un login, que siguiendo el flujo, se realiza en el caso de no estar logeado antes de realizar el pago.
 - Profile: Se tiene una página para el perfil, pero no está implementada, se tienen components de profile que se cambian según la opción seleccionada. Está avanzada la vista principal, pero se necesita trabajo en el componente que se muestra y la conexión con la base de datos.
 - Botones extra: Es posible observar en el flujo, ciertos botones como "quiero mantener guardada mi información", o ciertos detalles de ese estilo. No están implementados, lo ideal sería realizarlo.