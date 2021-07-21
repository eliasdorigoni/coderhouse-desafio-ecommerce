import CartWidget from './CartWidget'

const Navbar = () =>
    <>
        <nav>
            <p className="item">Menu 1</p>
            <p className="item">Menu 2</p>
            <p className="item">Menu 3</p>
            <CartWidget />
        </nav>
    </>

export default Navbar