const Footer = () =>
    <section className="bg-gray-900 text-gray-300 text-center py-3 font-body bg-footer-hexagon-pattern">
        <img className="inline-block w-52 mb-4" src="/svg/logo-vertical.svg" alt="Mike's Mechs" />
        <p className="text-lg mb-8">
            <strong>
                Concesionaria #1 de mechs y robots del sistema solar
            </strong>
        </p>

        <p className="mb-4 leading-5">Casa central<br />
            Av. Elon Musk 1337, Terra Cimmeria, Marte<br />
            ventas@mikesmechs.com
        </p>

        <p className="border-t-2 border-main-light pt-8 pb-4 mx-12">
            Ecommerce diseñado y desarrollado por <span className="text-yellow-600 font-bold">Elías Dorigoni</span> para el curso de React JS de <span className="text-green-600 font-bold">Coderhouse</span>.
            <br />
            Julio-Agosto 2021
        </p>

        <a className="inline-block opacity-50 hover:opacity-100" href="https://github.com/eliasdorigoni" target="_blank" rel="noreferrer">
            <img className="h-8 w-8" src="/svg/logo-github.svg" alt="Github" />
        </a>
    </section>

export default Footer