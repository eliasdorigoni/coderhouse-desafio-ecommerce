<p align="center">
    <a href="https://mikes-mechs.netlify.app/" rel="nofollow" target="_blank"><img width="199" height="136" src="https://raw.githubusercontent.com/eliasdorigoni/coderhouse-desafio-ecommerce/master/public/svg/logo-vertical-dark.svg" /></a>
</p>
<br />

Este proyecto fue armado para el curso de ReactJS de Coderhouse.

# Sobre este ecommerce

Decidí aprovechar la oportunidad de que esta tienda no está dirigida a un cliente
real y hacer una tienda de fantasía.

**Mike's Mechs** es un ecommerce ambientado en el futuro. El dueño y mecánico,
Mike, aprovecha la guerra interplanetaria para vender sus robots de combate ("mechs")
en su concesionaria ubicada en Marte. También vende mechs utilitarios para tareas
de apoyo y otros suministros. Todos los precios están definidos en créditos "CR".

# Dependencias externas al curso

## [Tailwind](https://tailwindcss.com/)
Elegí este framework CSS porque me permite dar estilos rápidamente y no hace falta
extender estilos para que parezca "menos bootstrap" (o cualquier otro framework).

## [Creact React App Configuration Override](https://github.com/gsoft-inc/craco) (CRACO)
Es requerido para poder utilizar Tailwind, de acuerdo a la
[guía de Tailwind para Create React App](https://tailwindcss.com/docs/guides/create-react-app).
Los comandos `npm start` y `npm run build` fueron ajustados para no requerir acciones extra.

## [Node Version Manager](https://github.com/nvm-sh/nvm)
Técnicamente no es una dependencia ni un package, pero se puede usar nvm para leer
del archivo `.nvmrc` la versión de npm a usar.

Hay que instalarlo y ejecutar `nvm install` o `nvm use`.


# Instalación
Clonar el proyecto e ir a la carpeta:
```bash
git clone https://github.com/eliasdorigoni/coderhouse-desafio-ecommerce
cd coderhouse-desafio-ecommerce
```
Instalar la versión de npm recomendada (instalar nvm si hace falta):
```bash
nvm install
```
Instalar las dependencias:
```bash
npm install
```
Duplicar el archivo `.env.example` como `.env`. Poner las claves correctas provistas
por privado.
```
cp .env.example .env
```
Iniciar el servidor local:
```bash
npm start
```

# Comandos
+ **npm start**: inicia el servidor local
+ **npm run build**: compila los estilos y scripts para el servidor (Netlify)


# Consideraciones internas

## Product es Item
Considero que la palabra "Item" es demasiado amplia para referirse a lo que en
realidad son los productos de la tienda, por lo que reemplacé **casi** todas las
referencias a "Item" por "Product". La única que no cambié es la colección "items"
en Firebase, para tener retrocompatibilidad con los desafíos anteriores.

