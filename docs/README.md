# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

# Repositorio Git

Como parte del proceso de **Ingeniería de Software**, por el lado de procesos de apoyo, utilizaremos una herramienta de ***Software Control Management*** (Gestión de control de software) llamada **Git**.

Está nos permitirá **mantener control** sobre los cambios que ocurran en nuestro proyecto. Aquí se alojaran nuestros elementos de configuración como lo es esta misma documentación.

Git nos permitirá crear repositorios tanto locales como hacer uso de repositorios remotos. Nosotros tendremos nuestro repositorio subido en la pagina web Github, donde cada integrante podrá acceder de forma online a la ultima versión subida de forma remota. Como también subir sus commits locales al repositorio remoto para que otros tengan acceso.

## Comandos Git ejecutados desde terminal y desde el IDE

Para poder hacer uso de esta herramienta hay que tener instalado [Git](https://git-scm.com/) en nuestra computadora.

Nuestro repositorio fue originalmente creador desde Github, por lo que no tendremos que inicializarlo nosotros de forma manual. Pero para poder trabajar en el de forma local debemos obtener una imagen del mismo haciendo uso del siguiente comando desde la terminal

`$ git clone <url>`

Donde \<url\> será el link proporcionado por Github

`$ git clone https://github.com/ORTFIS2022/obligatorio-vazquez-fernandez-salinas.git`
***
Una vez descargado, podemos empezar a realizar cambios en los documentos. En la siguiente sección veremos el porque, pero los cambios en producción serán hechos en otra **rama** llamada develop.

Para saber en que rama estamos trabajando utilizaremos

`$ git branch`

Para acceder a ella utilizaremos el comando:

`$ git checkout develop`

Si esta no existe, la consola nos avisará y podremos crearla con:

`$ git checkout -b develop`

### Nota: git es case-sensitive (sensible a capitalización), por lo que debemos cuidar que ejecutamos.

Por ejemplo:

`$ git checkout -B develop`

Si la rama ya existía, la reinicia.

https://git-scm.com/docs/git-checkout
***

Ya parados sobre la rama develop, podemos hacer cambios en nuestros documentos. Cuando estemos listos para crear una instancia/*snapshot*, de nuestro trabajo debemos realizar un **commit**

En Git tenemos tres areas
1. Working Directory
2. Staging Area (Added)
3. Repositorio (Committed)

Para ver que archivos se modificaron:

`$ git status`

Nuestros archivos modificados se encuentran en el area Working. Por lo que debemos pasarlas al Staging Area usando:

`$ git add .`

Y si estamos seguros realizamos el commit:

`$ git commit -m "Primer commit" `

El *tag* -m seguido de un comentario entre comillas... agrega el comentario.

Finalmente, para que nuestros cambios se vean reflejados en la web de Github. Finalmente haremos:

`$ git push`

Si nos encontramos con algun tipo de error, que nos indique que la rama no existe de forma remota, repetimos el comando anterior de la siguiente forma:

`$ git push --set-upstream origin develop`

Este ultimo push se nos exige para generar una rama visible en el github
***
Si un compañero, o nostros mismos tenemos el clon del git desde otro computador, podemos obtener la ultima version subida a github haciendo:

`$ git pull`
***
A lo largo del proyecto podremos chequear estos commits y sus hashes asociados con el comando

`$ git log`

***
Luego de completar ciertas metas arbitrarias, o cuando consideremos que nuestro proyecto se encuentra en una etapa sin errores y funcional. Podremos realizar un merge a main, esto es, transferir todo nuestro trabajo de nuestra rama develop a la principal.

Hablaremos más adelante de esto en la sección de versionado.

Para esto nos situaremos en la rama main utilizando:

`$ git checkout main`

Y realizamos el merge con main

`$ git merge develop`

Puede que en durante este proceso tengamos que resolver algún conflicto debido al merge. Teniendo que seleccionar que partes mantener y cuales cambiar entre las dos versiones.

## Conventional commits

A la larga la cantidad de commits realizados crece de forma exponencial, por lo que introduciremos los conventional commits para ordenar un poco nuestro caos.

Esto no es una herramienta especial de Git, ni Github, sino que es algo completamente sintáctico a la hora de generar nuestro comentario.

Previo a la descripción de nuestro commit, haremos uso de distintos *tags*, presentados a continuación:

### docs
`git commit -m "docs: Conventional commits"`
Este hará referencia a cambios en la documentación.

### feat
Introduce una *feature* (funcionalidad) al programa
### fix
Arregla errores
### style
Se realizaron cambios en el estilo, cambios que no afecten la funcionalidad final

https://www.conventionalcommits.org/en/v1.0.0/#specification
https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

Estos son **algunos** de los que estaremos usando en nuestro proyecto, que se pueden encontrar normalmente en proyectos.

Siendo que esto es simplemente texto, si nuestra organización así lo necesite, puede inventar su propia convención.

# Versionado

Buenas prácticas de versionado
> "Un control de versiones es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante."
> (Pro Git - About Version Control, https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
Uso de ramas separadas de 'main'
## Buenas prácticas de versionado

Resumen de commits y evolución del proyecto
Para realizar el versionado de nuestro trabajo utilizamos Git, un sistema de control de versiones distribuido que nos permite tener repositorios locales completamente funcionales, los cuales son clones del proyecto (situado en un repositorio remoto), lo cual facilita el trabajo simultáneo, mantener un registro de los cambios realizados por cada integrante, así como la opción de volver hacia atrás.
A esta herramienta se le suma Github, la cual es una plataforma donde se puede guardar la documentación de los proyectos online (repositorio remoto).

## Uso de ramas separadas de "main"

Una rama es una "copia" de nuestro proyecto en la cual podemos realizar cambios sin afectar a la rama principal; para luego poder fusionarlas y tener un historial de cambios más limpio. Es una función esencial en este tipo de proyectos, ya sea para agregar funciones o arreglar errores, y así evitar que código inestable se fusione con el código base principal.
En nuestro caso utilizaremos dos ramas: main y develop. La rama main aloja las versiones estables del proyecto (que no están en constante cambio), mientras que develop es la de uso diario sobre la que trabajaremos de forma continua.

## Resumen de commits y evolución del proyecto


# Elicitación
Técnicas de elicitación utilizadas:  
Entrevista: Una entrevista es una reunión entre dos personas, donde se realizan una secuencia de preguntas, cuya respuesta será de ayuda para resolver asuntos relacionados al negocio, o las características de software a desarollar.

Encuesta: Una encuesta es un formulario con preguntas, el cual se presenta a un grupo de personas para que el mismo lo complete, con el objetivo de desarrollar la solución a un problema en base a las mismas.

Ingeniería inversa: La ingeniería inversa es un proceso en cual se observa la construcción, diseño, y demás características de un producto ya construido, para así crear uno igual.

User Persona: Los User Persona son un modelo ficticio de usuarios, que ayuda a generar una idea general de los motivos, necesidades, frustraciones, habitos que tiene el mismo, y así poder ofrecer un producto que se adapte a todas esas características.

## Etapas y posibles preguntas guía para la entrevista (10 minutos)
### Etapa 1: Introducción casual

¿Es el fútbol uno de tus intereses? / ¿Te interesa el fútbol?  
En caso de serlo, ¿Cómo manifiestas tu interés hacía el mismo?  
¿Cómo lo disfrutas?  
¿Estás al tanto del comienzo del mundial?  
¿Qué tipo de comportamientos, o prácticas tienen los fanáticos en este tipo de eventos?  
¿Estás familiarizado con el concepto de fixture? De ser así, explicando con tus palabras… ¿Qué es el mismo?  
¿Alguna vez utilizaste alguno? ¿Solo, con amigos, o familiares?
***
### Etapa 2: Introducción a la aplicación

¿Conoces la existencia de las aplicaciones de fixture?  
¿Has usado alguna vez una?  
¿Qué cosas crees que es esencial que las mismas contengan?  
¿Qué emociones experimentas?   
¿Sentís competitividad/rivalidad?   
¿Cuáles son tus motivos para utilizarlas?  
¿Qué obtienes a cambio?  
¿Hay algo que no te agrade de estas aplicaciones  

## Se ha realizado la entrevista:
* [Transcripción](investigacion/README.md)

***
## Preguntas del Cuestionario (4-8 Minutos)

1. ¿Estás interesado en el futbol?
    - [ ] Si
    - [ ] No

2. ¿Cómo calificarías tu interés?  <!-- Esto filtra la importancia del requerimiento -->
    - [ ] 1 (Alto)
    - [ ] 2
    - [ ] 3
    - [ ] 4
    - [ ] 5 (Bajo)

3. ¿Qué conoces como Fixture / Penca?

| Inserte texto |
| ------------- |

4. ¿Qué te gusta de las apps de Fixture / Penca actuales?

| Inserte texto |
| ------------- |

5. ¿Qué NO te gusta de las apps actuales?

| Inserte texto |
| ------------- |

6. ¿Qué consideras es un buen incentivo o recompensa para su uso?

| Inserte texto |
| ------------- |

---

* [Resultados](investigacion/README.md)

***
## Ingeniería Reversa

Hemos analizado dos aplicativos populares en el mercado iOS:
(Las imágenes pueden variar según el dispositivo, el análisis fue hecho sobre un iPhone 8)

[World Cup App](https://apps.apple.com/uy/app/world-cup-app-2022/id793118251)  
![](investigacion/reversaWCA.jpg) 

[Penca Ovación Movistar](https://apps.apple.com/uy/app/penca-ovaci%C3%B3n-movistar/id1357606778) 
![](investigacion/reversaPOM.jpg)


Pantalla de Inicio:  
World Cup App
* Se visualizan los partidos actuales o más próximos a las fechas.
* Permite ir rápidamente a ver el resto de partidos, ya sean previos o futuros.
* Permite también, ver los siguientes partidos clasificados por los grupos de países.

Penca Ovación Movistar
* Lista ordenada de los próximos partidos, con información sobre la fecha de juego y grupo al que pertenece el partido. 


Vista detallada de un partido:  
World Cup App
* Score actual ubicado en la parte superior, siendo lo primero a ver por el usuario.
* Información adicional se provee tal como lesiones, goles y demás.

Penca Ovación Movistar
* Visualización clara de los contrincantes
* Permite hacer ingreso de una predicción
* Estadísticas sobre los pronósticos de otras personas

Ingreso de Predicción:  
World Cup App
* No tiene

Penca Ovación Movistar
* Aspecto sencillo, como el resto de la app.
* Tipografías grandes, agregan facilidad al usuario al interactuar con la app.

***

Evidencia de actividades de investigación

Referencias a fuentes de información

***
## Caracterización de usuarios: User Personas
![](investigacion/UPersona1.png)
![](investigacion/UPersona2.jpeg)
![](investigacion/UPersona3.png)
## Modelo conceptual del problema
![](investigacion/modelo.png)
# Especificación

## Definición de requerimientos funcionales y no funcionales
### Requerimientos funcionales
RF: No Login 
Actor: Usuario

Descripción: El sistema debe funcionar sin que el usuario final, se creé una cuenta. Los datos se guardan de forma local.

Prioridad: Alta
 
RF: Ver Partidos Próximos 
Actor: Usuario

Descripción: El sistema debe mostrar un listado de los próximos partidos a jugar en la pantalla de inicio.

Prioridad: Alta

RF: Predicción 
Actor: Usuario

Descripción: El usuario debe ser capaz de insertar una predicción a los próximos partidos.

Prioridad: Altísima

RF: Estadísticas Pre-Producción
Actor: Usuario

Descripción: El usuario debe estar informado de ciertas estadísticas al momento de realizar la predicción. No todos los usuarios saben cómo juegan ciertos países, por lo que brindar esta información da una mano. Aquellos más metidos en el fútbol, tendrán ventaja de igual forma al saber las estrategias de cada equipo.

Prioridad: Media

RF: Logros
Actor: Usuario

Descripción: El sistema debe presentarle al usuario, la posibilidad de mostrar sus logros de forma fácil frente a sus pares. Definimos un logro, como un objetivo arbitrario al cual se le asigna un cierto “badge” icono a él.

Prioridad: Media

RF: Puntos 
Actor: Usuario

Descripción: El sistema debe presentarle al usuario, la posibilidad de mostrar sus puntos de forma fácil. Estos puntos se obtienen según qué tan acertadas han sido las predicciones del usuario.

Prioridad: Alta

RF: Canjear Puntos 
Actor: Usuario

Descripción: El sistema debe presentar al usuario, la posibilidad de canjear sus puntos en una tienda online, donde la misma podría contener objetos tales como camisetas, figuritas, y de más cosas.

Prioridad: Baja

RF: Hacer grupo con códigos de amigo (sin login) 
Actor: Usuario

Descripción: El usuario podrá unirse o crear un grupo, haciendo uso de códigos. 

Prioridad: Media

### Requerimientos no funcionales

RNF1: Especificación de estilo
Descripción: El sistema debe 

https://material.io/resources/color
Nombre de la app: Mundial
Colors primary: Green 900, secondary: Light Blue 800
Font: Roboto
Icons: filled

RNF2: Números grandes.
Descripción: El sistema debe presentar los scores y predicciones en un formato grande, de forma que el usuario pueda ver de forma rápida y clara, sin mucho esfuerzo.

RNF3: Responsive
Descripción: El sistema debe ser tanto web como mobile

RNF4: Minimizar Uso de Ads 
Descripción: El sistema deberá implementar anuncios no intrusivos, para no agobiar al usuario que lo utiliza.

RNF5: Sencilla 
Descripción: El sistema debe ser simple y fácil de utilizar.

RNF6: Navegación 
Descripción: Página única con navegación entre secciones

RNF7: Instantaneidad 
Descripción: El sistema deberá ser rápido en cuanto a la muestra de resultados y entrega de puntos.

RNF8: Material Design Web Components 
Descripción: Uso de librerías de diseño como MDWC


## User Stories / Use Cases detallados

US: 
Título: Partidos
Narrativa: 
Como usuario
	Quiero ver los partidos
	Para estar informado
Criterios de aceptación: 
	Veo los partidos

US:
Título: Predecir
Narrativa: 
Como usuario
	Quiero predecir el resultado de un partido
	Para ver que tan acertado estoy
Criterios de aceptación: 
El usuario ingresa una prediccion valida en base a sus conocimientos y las estadísticas otorgadas por el sistema


US:
Título: Obtención de puntos
Narrativa: 
Como usuario
	Quiero obtener puntos
	Para luego canjearlos por premios
Criterios de aceptación: 
	Que el partido haya finalizado y están disponibles los resultados en el panel de resultados.
	

US:
Título: Status
Narrativa: 
Como usuario
	Quiero ver mis puntos y logros
	Para mostrarle a sus pares
Criterios de aceptación: 
	La visualización en pantalla de los puntos y logros del usuario

US: 
Título: Grupo
Narrativa: 
    Como usuario
	Quiero crear o unirme a un grupo
	Para pertenecer a uno
Criterios de aceptación: 
	El usuario se une o crea un grupo vacío, obteniendo o ingresando el código de este
    
    
US: 
Título: Canje
Narrativa: 
Como usuario
	Quiero canjear mis puntos
	Para obtener un premio físico
Criterios de aceptación: 
Si el usuario alcanza la cantidad requerida de puntos, podrá recibir un producto a  cambio. Se le otorga un código para cambiar en una tienda afiliada.


## Bocetos de IU


# Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

# Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes