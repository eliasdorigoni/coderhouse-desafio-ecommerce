import NavBar from './Navbar'

const Header = () =>
    <header className="border-b-2 border-white border-opacity-30">
        <div className="container mx-auto">
            <div className="pb-1 pt-2 px-4">
                <div className="flex justify-between flex-grow-0 items-center mb-2">
                    <div className="flex-initial pr-3">
                        <img className="site-logo" src="/svg/logo-horizontal.svg" alt="Mike's Mechs" />
                    </div>
                    <div className="flex-shrink-0 sm:hidden">
                        <button className="border-2 border-white block rounded-md" type="button">
                            <img src="/svg/menu.svg" alt="Menu" className="w-10 h-10 hover:bg-white hover:bg-opacity-25" />
                        </button>
                    </div>
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
        </div>
    </header>

export default Header