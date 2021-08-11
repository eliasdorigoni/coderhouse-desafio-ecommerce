import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import RecentProducts from './components/RecentProducts'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import './App.css'

const App = () => {

    const [ cartItemCount, setCartItemCount ] = useState(0)

    const onAddToCart = (e) => {
        setCartItemCount(cartItemCount + e)
    }

    return (
        <BrowserRouter>
            <Header itemCount={cartItemCount} />
            <RecentProducts />

            <div className="container mx-auto mb-12 font-body">
                <Switch>

                    <Route path="/about-us">
                        <AboutUs />
                    </Route>

                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>

                    <Route path="/category/:id">
                        <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                            <div className="col-span-3 mb-4">
                                <ItemListContainer />
                            </div>
                            <div>
                                <Services />
                            </div>
                        </div>
                    </Route>

                    <Route path="/item/:id">
                        <section className="py-4">
                            <ItemDetailContainer onAddToCart={onAddToCart} />
                        </section>
                    </Route>

                    <Route path="/">

                        <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                            <div className="col-span-3 mb-4">
                                <ItemListContainer />
                            </div>
                            <div>
                                <Services />
                            </div>
                        </div>
                    </Route>


                </Switch>
            </div>

            <Footer />
        </BrowserRouter>
    )
}

export default App;
