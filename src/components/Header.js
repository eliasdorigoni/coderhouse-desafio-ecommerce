import { Link } from 'react-router-dom'
import NavBar from './Navbar'

const Header = () =>
    <header className="border-b-2 border-t-2 border-main-light">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-stretch">
                <div className="flex-initial">
                    <Link to={'/'}>
                        <img className="site-logo py-3" src="/svg/logo-horizontal.svg" alt="Mike's Mechs" />
                    </Link>
                </div>
                <NavBar />
            </div>
        </div>
    </header>

export default Header