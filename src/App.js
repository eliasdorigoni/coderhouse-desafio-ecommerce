import Header from './components/Header'
import TopBar from './components/TopBar'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import Footer from './components/Footer'
import { Products } from './data/Products'
import './App.css'

const App = () => {
    return (
        <>
            <TopBar />
            <Header />
            <div className="container mx-auto mb-12">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <ItemListContainer  products={Products} />
                    </div>
                    <Services />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
