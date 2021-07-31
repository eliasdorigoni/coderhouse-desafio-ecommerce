import {useState} from 'react'
import Header from './components/Header'
import TopBar from './components/TopBar'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import ItemCount from './components/ItemCount'
import Footer from './components/Footer'
import RecentProducts from './components/RecentProducts'
import './App.css'

const App = () => {
    const [productsInCart, setProductsInCart] = useState(0)
    const setProductCount = (amount) => setProductsInCart(productsInCart + amount)

    return (
        <>
            <TopBar cartItemCount={productsInCart} />
            <Header />
            <RecentProducts />
            <div className="container mx-auto mb-12 font-body">
                <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                    <div className="col-span-3 mb-4">
                        <ItemListContainer />
                    </div>
                    <div>
                        <ItemCount stock="12" initial="1" onAdd={setProductCount} />
                        <Services />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
