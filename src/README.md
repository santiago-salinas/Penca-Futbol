# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

## Construcción

### Implementación de funciones principales (sin la necesidad de persistencia de datos)  
✔️ - RF1: No Login  
✔️ - RF2: Ver Partidos Próximos  
✔️ - RF3: Predicción  
🚫 - RF4: Estadísticas Pre-Predicción  
🚫 - RF5: Logros  
✔️ - RF6: Puntos  
🚫 - RF7: Canjear Puntos  
🚫 - RF8: Hacer grupo con códigos de amigo (sin login)  

✔️ - RNF1: Especificación de estilo  
✔️ - RNF2: Números grandes  
✔️ - RNF3: Responsive  
✔️ - RNF4: Minimizar Uso de Ads  
✔️ - RNF5: Sencilla  
✔️ - RNF6: Navegación  
❓ - RNF7: Instantaneidad  
✔️ - RNF8: Material Design Web Components  

De forma general la aplicación es capaz de moverse a través de las diferentes secciones (Próximos, Resultados, Grupo, Canje, Perfil). Siendo en Próximos, Resultados y Perfil donde hay funcioness implementadas.

Los User Cases implementados en esta ocasión fueron 
### UserCase 1: Ver partidos próximos
El usuario selecciona "Próximos Partidos" y a continuación se muestran los partidos más inmediatos, sus equipos y horarios.

![](imagenes/imagen5.jpg)

### UserCase 2: Predecir
El usuario selecciona "Ingresar predicción" en el área de “Próximos partidos”, aparece un campo de texto para ingresar la misma, y se presiona un botón para confirmarla.

![](imagenes/imagen2.jpg)
![](imagenes/imagen1.jpg)
![](imagenes/imagen3.jpg)

### UserCase 3: Obtención de puntos
El usuario selecciona el área "Resultados", se muestran los partidos ya jugados y con su correspondiente resultado, y en el caso de haber ingresado una predicción en el mismo, el sistema muestra un botón para reclamar los puntos.

![](imagenes/imagen6.jpg)

### UserCase 7: Ver logros o puntos
El usuario selecciona el área "Perfil" y es capaz de visualizar sus puntos resultantes de las predicciones realizadas en partidos ya jugados.

![](imagenes/imagen7.jpg)

### Configuración de plataforma tecnológica para desarrollo y producción

### Documentación del uso de librerías externas (package.json)

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)  
Esto es posible gracias a propiedades de estilo css que se aseguran de que la interfaz sea agradable para el usuario en ambos casos. 

La propiedad de estilo en cuestión es la siguiente:  
` @media only screen and (min-width: 768px) `


### Página única con navegación entre secciones  
Para esto 
Hicimos uso del Material Design Component Tab para llevar a cabo con este requerimineto de navegación. 

Se plantea un ` <section id="Pantalla"> ` que contendra dentro un ` <section id="nombreSeccion"> ` para cada una de las distintas pantalla.

El efecto de cambio se efectua con el uso de dos clases scss principales ` .hide ` y ` .show `, que ocultan o muestran el section en pantalla.

### Implementación: Material Design Web Components

### Aplicar un sistema de diseño y principios de usabilidad

### Cumplimiento de estándar de accesibilidad WCAG

### Seguir especificación de estilo

## Codificación

### IDE Visual Studio Code: configuración común del equipo
Para la realización del proyecto, el IDE utilizado por el equipo, fue IDE Visual Studio Code en la versión 1.73.1, utilizando extensiones tales como, LiveShare (para aquellos momentos donde era necesario trabajar en conjunto para solucionar problemas, o decidir la implementacion de una cierta función) y TodoTree (para dejar marcada tareas para el resto del equipo, o pequeños detalles a arreglar a futuro)

### Estándares de codificación Google (HTML, CSS, JavaScript)
"Un estándar de codificación es una serie de reglas que determinan cómo debe escribirse el código. El objetivo es lograr un código fácil de leer por otros humanos 
Un ejemplo de una regla como esta podría ser «todos los if llevan {} independientemente de que haya una línea dentro del bloque o más de una" - https://academy.leewayweb.com/


Para lograr el correcto uso de los estándares de codificación, se tomaron como base los estándares de codificación de Google, para poder utilizar los mismos, se hizo empleo de ESLint como herramienta de análisis estático de código de JavaScript.
### Buenas prácticas de OOP: separación de lógica e interfaz
A modo de buena práctica de OOP, se separó la lógica de la interfaz.
Por un lado, contamos con la carpeta dominio, la cual incluye la lógica, las clases y los test, y por el otro la carpeta Interfaz, la cual contiene el HTML, el SCSS, y JavaScript

En la carpeta dominio, podemos encontrar las clases
 - partido.js
 - perfil.js
 - sistema.js 

al igual que los test
-sistema.test.js

En la carpeta interfaz, podemos hallar
- index.html
- index.js
- _variables.scss
- index.scss

### Análisis estático de código: mostrar reducción de problemas
"Una herramienta de análisis estático escanea el código en busca de errores y vulnerabilidades comunes conocidas, como fugas de memoria o desbordamientos de búfer. El análisis también puede hacer cumplir las reglas de codificación." - https://www.jetbrains.com/

Como ya mencionado anteriormente, se hizo uso de la herramienta esLint.

## Test unitario

### Test unitarios en Jest

### 100% cobertura en clases de dominio


| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema

### Realizar test de sistema en un entorno separado del desarrollo
100% cobertura en clases de dominio
 PASS  ./sistema.test.js
  V Mi primera prueba (4 ms)
  V Obtener partido en default (2 ms)
  V Crear Sistema, puntaje 0 (1 ms)
  V Establecer puntaje 100 (1 ms)
  V Establecer puntaje negativo (1 ms)
  V Estado de partido aun no reclamado (1 ms)
  V Estado de partido reclamado (1 ms)
  V Estado de partido fantasma
  V Prediccion 1 negativa (1 ms)
  V Prediccion 2 negativa (1 ms)
  V Prediccion 2 negativa
  V Estado de la prediccion 1
  V Estado de la prediccion 2 (1 ms)
  V Estado del resultado 1 (1 ms)
  V Estado del resultado 2 (1 ms)
  V Resultado negativo (1 ms)
  V Prediccion exacta (10 ms)
  V Prediccion delta2 (1 ms)
  V Prediccion delta2 (2 ms)
  V Obtener Perfil (1 ms)

------------|---------|----------|---------|---------|----------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line
------------|---------|----------|---------|---------|----------------
All files   |     100 |      100 |     100 |     100 |
 partido.js |     100 |      100 |     100 |     100 |
 perfil.js  |     100 |      100 |     100 |     100 |
 sistema.js |     100 |      100 |     100 |     100 |
------------|---------|----------|---------|---------|----------------
Test Suites: 1 passed, 1 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        3.835 s
Ran all test suites.

| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema
A nuestro equipo se nos ha asignado el siguiente repositorio:
` https://github.com/ORTFIS2022/obligatorio-goday-fernandez-morandi `

Realizar test de sistema en un entorno separado del desarrollo

### Generar casos de prueba aplicando técnica partición equivalente
Al momento de ingresar una predicción se han tomado en cuenta las siguientes particiones

Numeros Enteros Positivos dentro de un rango normal 0-100:  
✔️ - El sistema actúa de forma normal

Numeros Enteros Positivos fuerra de un rango normal > 100:  
❓ - El sistema acepta numeros muy grandes, considerando las condiciones reales y fisicas de un partido de football, es raro que ocurra.

Numeros Enteros Negativos:  
✔️ - El sistema actúa de forma normal rechazando este tipo de predicciones

Numeros con Decimales:  
🚫 - El sistema admite el ingreso de las misma
Ejemplo: 2.3

Letras
🚫 - Permite escribir sobre el campo de entrada
✔️ - No permite ingresarlo como predicciñon




### Detallar sesiones de prueba exploratoria

## Reporte de issues
Hemos realizado reportes de issues tanto en nuestro sistema, como en el sistema del equipo 1.

![image](https://user-images.githubusercontent.com/48341470/203602402-24f735f2-03ac-4dbd-93c8-98ca114c7dd9.png)

![image](https://user-images.githubusercontent.com/48341470/203603427-185d4f02-f69c-4ecc-8f17-3bfa82c33910.png)

### Reportar issues (bugs, improvements, missing features) en GitHub 

### Aplicar buenas prácticas de reporte de issues

### Definir labels para tipos de issue y niveles de severidad
Hicimos uso de la label predeifinida ` bug ` y hemos creado una propia para problemas visuales relacionados con el estilo ` style `.

### Dejar issues abiertos para correcciones o mejoras futuras

### Sumarizar número de issues reportados por tipo

### Realizar una evaluación global de la calidad

## Reflexión

### Detalle del trabajo individual
Noe: Desde hace mucho tiempo ya, no construía algo desde abajo, por lo que realizar este proyecto, fue un desafío interesante y enriquecedor, ya que se recordaron tecnologías que se utilizaron en un pasado y el volver a tenerlas en cuenta para refrescar el conocimiento sirvio para mantener el entedimiento de las mismas fresco, destaco denuevo la opinión sobre mis compañeros dada en la primera instancia y lo que más me llevo de este proyecto es la cercanía que tiene con el mundo real:el tener que empezar algo, y tener que analizar como enfocarlo y/o dirigirlo.


### Técnicas aplicadas y aprendizajes
Teniendo en cuenta los aprendizajes de la primera instancia de este proyecto, como lo son, el buen trabajo en equipo, la comunicación entre las diferentes partes, ahora, en esta segunda instancia como reflexiones y aprendizajes finales, podemos discutir y recalcar diferentes puntos, tales como:

1. Toma de decisiones: A la hora de comenzar a montar, y estructurar la aplicación, hubo que evaluar que era más benificioso para el equipo, el comenzar el proyecto desde cero, o utilizar uno ya comenzado y empezar a trabajar desde ese punto.
   
2. Ingeniería inversa: Como decisión grupal, evaluamos que tomar el proyecto brindado como ejemplo era la mejor opción, en la práctica a esto se le llama "Ingeniería inversa", y es el proceso llevado a cabo con el objetivo de obtener información o un diseño a partir de un producto ya creado, con el objetivo de recrear uno similiar al mismo. 
   
3. Comunicación: Las formas en las que las funciones podían ser implentadas eran infinitas, por lo que una buena comunicación sobre como estructurar los componentes y sus funcionalidades fue clave esencial para la aplicación.
   
4. Miedo a lo desconocido: Al principio surgieron muchas dudas sobre como comenzar el mismo, sobre como hacer las implentaciones o sobre como funcionaban los componentes, por lo que la confianza en que, eventualmente, con su correcta investigación y motivación, se podrían hallar soluciones fue fundamental.
