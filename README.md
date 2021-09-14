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
de apoyo y otros suministros.

# Dependencias externas al curso

## [Tailwind](https://tailwindcss.com/)
Elegí este framework CSS porque me permite dar estilos rápidamente y no hace falta
extender estilos para que parezca "menos bootstrap" (o cualquier otro framework).

## [Creact React App Configuration Override](https://github.com/gsoft-inc/craco) (CRACO)
Es requerido para poder utilizar Tailwind, de acuerdo a la
[guía de Tailwind para Create React App](https://tailwindcss.com/docs/guides/create-react-app).
Los comandos `npm start` y `npm run build` fueron ajustados para no requerir acciones extra.

## [React Slick](https://react-slick.neostack.com/docs/get-started)
Este componente es un slider que se usa en el detalle de los productos.

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

## "items" vs. "products"
Durante el curso y los desafíos se usó la palabra "items" para las variables y los métodos referidos a los productos, pero yo usé "products" porque considero que es más específico que el anterior. Al final terminé con una mezcla de ambas formas en el código.

Decidí normalizar todo a "items" para este desafío porque es menos costoso en cuanto a cantidad de cambios. Por eso existe una colección de Firebase "products" que se usaba en desafíos anteriores y una nueva colección "items" para este último desafío.

## Topbar "Nuevos ingresos"
Lo agregué al topbar para darle más dinamismo a la página, pero sin enlaces para mantenerlo simple.

## Imágenes
Las imágenes de los productos son cuadradas de 400x400 para thumbnail y 1080x1080 para detalles.

## Precios
Siendo una economía interplanetaria los precios están en una moneda ficticia llamada "Astral" cuyo símbolo es &#8371; (que es el símbolo del austral argentino).

## Detalle de productos
Los desafíos anteriores indican que hay que mostrar el **stock del producto** en el componente `ItemQuantitySelector`, pero por cuestiones de diseño queda mejor si lo pongo debajo del precio, fuera del componente. El componente contador sigue funcionando correctamente, es decir no permite agregar más productos de los que existen en el stock.

Tomé de MercadoLibre la idea de mostrar el costo y fecha de entrega ("Llega en 4 días por $500"). Está hardcodeada la entrega en 10 días y el costo es un porcentaje del precio del producto.

### Producto con variantes
El mech **032** (ID `qGuSLApNAp4nPrerUmjZ`) tiene 3 variantes. Decidí hacer una galería con imágenes para cuando
no hay una variante elegida, y que cada variante tenga una "galería" propia. Éstas últimas las hice de 1 imagen
para que se aprecien las diferencias.
En la home hay un **Call to action** que referencia a este producto. El ID del producto está hardcodeado y
considero que "en la vida real" también se podría hacer así.


## Checkout, campos sin required

Para asegurarme que los campos de "Finalizar compra" tienen contenido podría haber agregado el atributo required en los
inputs, pero decidí verificarlos por javascript para poder mostrar mensajes de error con estilos.

# Requisitos extra

* [ ] Auth/login
* [ ] Wishlist
* [ ] Custom item
* [ ] Stock check
* [X] Categorias dinamicas: hice una colección con "title" y "id" (un string) de las 2 categorías que uso.
* [X] Cart persistente: usé un objeto PersistentCart como capa de abstracción.
* [ ] Mis órdenes