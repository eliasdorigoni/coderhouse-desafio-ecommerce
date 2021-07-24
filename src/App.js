import Header from './components/Header'
import TopBar from './components/TopBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { Products } from './data/Products'

const App = () => {
    const title = 'Ecommerce'

    return (
        <>
            <TopBar />
            <Header title={title} />
            <ItemListContainer products={Products} />
        </>
    )
}

export default App;
