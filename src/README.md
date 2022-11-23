# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

## Construcción

Implementación de funciones principales (sin la necesidad de persistencia de datos)
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
❓ - RNF5: Sencilla  
✔️ - RNF6: Navegación  
❓ - RNF7: Instantaneidad  
✔️ - RNF8: Material Design Web Components  

Configuración de plataforma tecnológica para desarrollo y producción

Documentación del uso de librerías externas (package.json)

## Interfaz de usuario

Interfaz de usuario web / mobile (responsive)
Esto es posible gracias a propiedades de estilo css que se aseguran de que la interfaz sea agradable para el usuario en ambos casos. 

La propiedad de estilo en cuestión es la siguiente:  
` @media only screen and (min-width: 768px) `


Página única con navegación entre secciones
Para esto 
Hicimos uso del Material Design Component Tab para llevar a cabo con este requerimineto de navegación. 

Se plantea un ` <section id="Pantalla"> ` que contendra dentro un ` <section id="nombreSeccion"> ` para cada una de las distintas pantalla.

El efecto de cambio se efectua con el uso de dos clases scss principales ` .hide ` y ` .show `, que ocultan o muestran el section en pantalla.

Implementación: Material Design Web Components

Aplicar un sistema de diseño y principios de usabilidad

Cumplimiento de estándar de accesibilidad WCAG

Seguir especificación de estilo

## Codificación

IDE Visual Studio Code: configuración común del equipo

Estándares de codificación Google (HTML, CSS, JavaScript)

Buenas prácticas de OOP: separación de lógica e interfaz

Análisis estático de código: mostrar reducción de problemas

## Test unitario

Test unitarios en Jest

100% cobertura en clases de dominio


| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente

Detallar sesiones de prueba exploratoria

## Reporte de issues

Reportar issues (bugs, improvements, missing features) en GitHub 

Aplicar buenas prácticas de reporte de issues

Definir labels para tipos de issue y niveles de severidad

Dejar issues abiertos para correcciones o mejoras futuras

Sumarizar número de issues reportados por tipo

Realizar una evaluación global de la calidad

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes
