import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import TopBar from './components/TopBar'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import RecentProducts from './components/RecentProducts'
import './App.css'

const App = () => {
    const [productsInCart, setProductsInCart] = useState(0)
    const setProductCount = (amount) => setProductsInCart(productsInCart + amount)

    return (
        <BrowserRouter>
            <TopBar cartItemCount={productsInCart} />
            <Header />
            <RecentProducts />

            <div className="container mx-auto mb-12 font-body">
                <Switch>
                    <Route exact path="/">
                        <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                            <div className="col-span-3 mb-4">
                                <ItemListContainer />
                            </div>
                            <div>
                                <ItemCount stock="12" initial="1" onAdd={setProductCount} />
                                <Services />
                            </div>
                        </div>
                    </Route>

                    <Route exact path="/category/:id">
                        <p>ItemList + cat</p>
                    </Route>

                    <Route exact path="/item/:id">
                        <section className="py-4">
                            <h1 className="text-2xl mb-2">En detalle</h1>
                            <ItemDetailContainer />
                        </section>
                    </Route>

                </Switch>
            </div>

            <Footer />
        </BrowserRouter>
    )
}

export default App;
