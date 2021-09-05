import Error from './../../img/robot-error.svg'

const ItemDetailNotFound = () =>
    <div className="text-center mt-12 mb-32">
        <img className="inline-block w-16 mb-4" src={Error} alt="Error" />
        <h1 className="text-2xl font-bold mb-2">Página no encontrada (404)</h1>
        <p>El producto que estás buscando no existe.</p>
    </div>

export default ItemDetailNotFound