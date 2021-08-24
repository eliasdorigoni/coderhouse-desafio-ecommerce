<p align="center">
    <a href="https://mikes-mechs.netlify.app/" rel="nofollow" target="_blank"><img width="199" height="136"  src="https://raw.githubusercontent.com/eliasdorigoni/coderhouse-desafio-ecommerce/master/public/svg/logo-vertical-dark.svg" /></a>
</p>
<br />

Este proyecto fue armado para el curso de ReactJS de Coderhouse.

Personalmente hice tiendas de muchas temáticas (calzado, ropa, perfumeria, comestibles, etc), así que decidí hacer una temática de fantasía.

**Mike's Mechs** es un ecommerce ambientado en el futuro. El dueño y mecánico, Mike, aprovecha la guerra interplanetaria para vender sus robots de combate ("mechs") en su concesionaria ubicada en Marte. También vende mechs utilitarios para tareas de apoyo y otros suministros. Todos los precios están definidos en "creditos".

## Dependencias externas al curso

Elegí **Tailwind** como framework de CSS porque me resulta más práctico que escribir el CSS a mano y no me limita a las decisiones de estilo de librerías como Bootstrap, Bulma o Material UI. Integré **CRACO** de acuerdo a la [guía de Tailwind para Create React App](https://tailwindcss.com/docs/guides/create-react-app) para poder procesar Tailwind correctamente. Los comandos `npm run start` y `npm run build` fueron ajustados para no requerir acciones extra.

Usé **NVM** para definir la versión a usar y coloqué un archivo `.nvmrc` con la versión recomendada.

Agregué **env-cmd** para manejar por variables de entorno las credenciales de Firebase.


# Requisitos para iniciar el servidor local
Duplicar el archivo `.env.example` y nombrarlo como `.env`. Poner las claves correctas.


# Comandos
```bash
# Para cambiar a la versión de NPM del proyecto
nvm use
# o si no está instalada
nvm install

# Para iniciar el servidor local (debe existir un archivo .env)
npm run start

# Para compilar todo
npm run build
```
