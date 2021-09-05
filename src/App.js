import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart/Cart'
import CartProvider from './components/Cart/CartProvider'
import CategoryContainer from './components/Category/CategoryContainer'
import HomeContainer from './components/Home/HomeContainer'
import './App.css'

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />

                <div className="container mx-auto mb-12 font-body">
                    <Switch>
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/category/:id" component={CategoryContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} />
                        <Route path="/" component={HomeContainer} />
                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
