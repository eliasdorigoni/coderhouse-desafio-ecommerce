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
en su concesionaria ubicada en Marte.

# Dependencias externas al curso

## [Tailwind](https://tailwindcss.com/)
Elegí este framework CSS porque me permite dar maquetar rápidamente sin tener que sobreescribir clases y selectores para que se adapte a mi diseño.

## [Creact React App Configuration Override](https://github.com/gsoft-inc/craco) (CRACO)
Es requerido para poder utilizar Tailwind, de acuerdo a la
[guía de Tailwind para Create React App](https://tailwindcss.com/docs/guides/create-react-app).
Los comandos `npm start` y `npm run build` fueron ajustados para no requerir acciones extra.

## [React Slick](https://react-slick.neostack.com/docs/get-started)
Este componente es un slider, que lo usé en el detalle de productos para mostrar una galería.

# Instalación
Clonar el proyecto y entrar en el directorio:
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
Duplicar el archivo `.env.example` como `.env`. Poner las claves de Firebase provistas
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


# Consideraciones internas y otros detalles

## Convención de "items" vs. "products"
Durante el curso y los desafíos se usó la palabra "items" para los métodos y variables referidos a los productos, pero yo usé "products" porque consideré que es más específico que el anterior. Al final terminé con una mezcla de ambas formas en el código.

Decidí normalizar todo a "items" para este desafío porque es menos costoso en cuanto a cantidad de cambios. Por eso existe una colección de Firebase "products" que se usaba en desafíos anteriores y una nueva colección "items" para este último desafío.

## Topbar con "Nuevos ingresos"
Agregué esto para darle más dinamismo a la página, pero no le puse enlaces porque iba a tener que crear más productos.

## Precios
Siendo una economía interplanetaria los precios están en una moneda ficticia llamada "Astral" cuyo símbolo es &#8371; (que es el símbolo del austral argentino).

## Detalle de productos
Los desafíos anteriores indican que hay que mostrar el **stock del producto** en el componente `ItemQuantitySelector`, pero por cuestiones de diseño queda mejor si lo pongo debajo del precio, fuera del componente. El componente contador sigue funcionando correctamente, es decir no permite agregar más productos de los que existen en el stock.

Tomé de MercadoLibre la idea de mostrar el costo y fecha de entrega ("Llega en 4 días por $500"). Está hardcodeada la entrega en 10 días, y el costo es un porcentaje del precio del producto.

## Producto con variantes
En la home hay un Call to Action que enlaza al mech llamado **032** ([/item/qGuSLApNAp4nPrerUmjZ](/item/qGuSLApNAp4nPrerUmjZ))
que tiene 3 variantes. Decidí que tenga una galería de imágenes para cuando no hay una variante elegida,
y que cada variante tenga su galería propia. Éstas galerías las hice de 1 imagen para que se aprecien las diferencias.

Por otro lado el producto al que enlaza el Call to Action está hardcodeado. Podría haberlo hecho por base de datos
pero considero que en proyectos reales también se podría hacer así.


## Checkout

### Inputs sin atributo "required"
Para asegurarme que los campos de "Finalizar compra" tienen contenido podría haber agregado el atributo `required` en los
inputs, pero decidí verificarlos por javascript para poder mostrar mensajes de error con estilos.

### Teléfono sin validar
Decidí no validar que el teléfono tenga un formato en particular porque no necesito consumir esa información.
En un ecommerce real también lo haría de esa forma **a menos** que se haga algo con ese dato, en ese caso
probablemente haría la verificación por expresión regular.

```js
if (!phone.match(/^+[0-9]+$/)) {
    errors.phone.push('No es un formato válido. Ejemplo: +54351123456789.')
}
```

Si el número **sí o sí** tiene que ser válido habría que enviar un SMS con un código para que el usuario lo ingrese.

# Requisitos extra

* [x] **Auth/login.** Se puede iniciar sesión en `/auth` con una cuenta de Google. No agregué persistencia de la sesión por falta de tiempo.
* [x] **Wishlist**. Las wishlists se crean en una colección aparte de Firestore, y se pueden ver en `/wishlist/:userid`. En "Mi cuenta" también hay un enlace.
* [x] **Custom item**. Hice un producto (mech "032") donde se puede personalizar el modelo a agregar.
* [ ] **Stock check**. No llegué por falta de tiempo.
* [x] **Categorias dinamicas**. Las 2 categorías que se usan en el sitio se cargan dinámicamente.
* [x] **Cart persistente**. Usé localStorage a través de un objeto sencillo llamado "PersistentCart" a modo de capa de abstracción.
* [x] **Mis órdenes**. En la sección "Mi cuenta" se muestran las órdenes realizadas por la cuenta autenticada.