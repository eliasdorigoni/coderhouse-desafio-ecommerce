import { Link } from 'react-router-dom'
import NavBar from './Navbar'
import RecentItems from './RecentItems'

const Header = () =>
    <>
        <RecentItems />
        <header className="border-b-2 border-main-light mb-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center lg:items-stretch">
                    <div className="flex-initial">
                        <Link to={'/'} className="inline-block">
                            <img className="site-logo py-3"
                                src="/svg/logo-horizontal.svg"
                                alt="Mike's Mechs" />
                        </Link>
                    </div>
                    <NavBar />
                </div>
            </div>
        </header>
    </>

export default Header