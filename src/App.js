import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import CartContainer from './components/Cart/CartContainer'
import CartProvider from './components/Cart/CartProvider'
import CategoryContainer from './components/Category/CategoryContainer'
import HomeContainer from './components/Home/HomeContainer'
import CartWidget from './components/Cart/CartWidget'
import CheckoutContainer from './components/Checkout/CheckoutContainer'
import PageNotFound from './components/PageNotFound'
import './App.css'
import AuthContainer from './components/Auth/AuthContainer'
import AuthProvider from './components/Auth/AuthProvider'

const App = () => {
    return (
        <CartProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <CartWidget />

                    <div className="container mx-auto mb-12 font-body">
                        <Switch>
                            <Route path="/about-us" component={AboutUs} />
                            <Route path="/cart" component={CartContainer} />
                            <Route path="/checkout" component={CheckoutContainer} />
                            <Route path="/category/:id" component={CategoryContainer} />
                            <Route path="/auth" component={AuthContainer} />
                            <Route path="/item/:id" component={ItemDetailContainer} />
                            <Route path="/" exact component={HomeContainer} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>

                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </CartProvider>
    )
}

export default App
