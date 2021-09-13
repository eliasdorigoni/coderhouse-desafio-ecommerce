import { Link } from "react-router-dom"

const CallToAction = () =>
    <div class="call-to-action-032">
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                <div className="call-to-action-images">
                    <img src="/img/products/032/cta-1.jpg" className="cta1" alt="032" />
                    <img src="/img/products/032/cta-2.jpg" className="cta2" alt="032" />
                    <img src="/img/products/032/cta-3.jpg" className="cta3" alt="032" />
                </div>
            </div>
            <div className="pb-2 pr-2">
                <div className="pt-4 md:pt-12 lg:pt-24 mb-4">
                    <p className="text-sm text-gray-300">¡Nuevo mech en preventa!</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelo 032</h2>
                    <p className="text-md text-gray-300 -mt-6 mb-4">de combate urbano</p>
                    <p>3 configuraciones a elección</p>
                </div>
                <Link to="/item/qGuSLApNAp4nPrerUmjZ" className="button bg-green-500">
                    ¡Reservar ahora!
                </Link>
            </div>
        </div>
    </div>

export default CallToAction