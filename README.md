<p align="center">
    <a href="https://mikes-mechs.netlify.app/" rel="nofollow" target="_blank"><img width="199" height="136" src="https://raw.githubusercontent.com/eliasdorigoni/coderhouse-desafio-ecommerce/master/public/svg/logo-vertical-dark.svg" /></a>
</p>
<br />

Este proyecto fue armado para el curso de ReactJS de Coderhouse.

# Sobre este ecommerce

Decidí aprovechar la oportunidad de que esta tienda no está dirigida a un cliente real y hacer una tienda de fantasía.

**Mike's Mechs** es un ecommerce ambientado en el futuro. El dueño y mecánico, Mike, aprovecha la guerra interplanetaria para vender sus robots de combate ("mechs") en su concesionaria ubicada en Marte. También vende mechs utilitarios para tareas de apoyo y otros suministros. Todos los precios están definidos en créditos "CR".

# Dependencias externas al curso

## Tailwind
Elegí este framework CSS porque me resulta más práctico que escribir el CSS a mano y no me limita a las decisiones de estilo de librerías como Bootstrap, Bulma o Material UI.

## CRACO
Es requerido para poder utilizar Tailwind, de acuerdo a la [guía de Tailwind para Create React App](https://tailwindcss.com/docs/guides/create-react-app). Los comandos `npm run start` y `npm run build` fueron ajustados para no requerir acciones extra.

## env-cmd
Este módulo permite importar un archivo .env a los scripts. Lo uso para enviar por variables de entorno las credenciales de Firebase. Declaré en un archivo `.env.example` las variables que se esperan usar en Firebase.

## nvm (Node Version Manager)
No es una dependencia ni un package, pero se puede usar [NVM](https://github.com/nvm-sh/nvm) para leer del archivo `.nvmrc` la versión de npm a usar. Hay que instalarlo y ejecutar `nvm install` o `nvm use`.



# Instalación
Clonar el proyecto:
```bash
git clone https://github.com/eliasdorigoni/coderhouse-desafio-ecommerce
```
Instalar la versión de npm recomendada (instalar nvm si hace falta):
```bash
nvm install
```
Instalar las dependencias:
```bash
npm install
```
Duplicar el archivo `.env.example` como `.env`. Poner las claves correctas provistas por privado.<br />
Por último iniciar el servidor:
```bash
npm start
```

# Comandos
+ **npm start**: inicia el servidor local
+ **npm run build**: compila los estilos y scripts para el servidor (Netlify)
