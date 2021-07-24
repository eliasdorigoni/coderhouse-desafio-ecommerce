import Header from './components/Header'
import TopBar from './components/TopBar'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import { Products } from './data/Products'
import './App.css'

const App = () => {
    const title = 'Ecommerce'

    return (
        <>
            <TopBar />
            <Header title={title} />
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <ItemListContainer  products={Products} />
                    </div>
                    <Services />
                </div>
            </div>
        </>
    )
}

export default App;
