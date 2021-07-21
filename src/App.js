import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    const title = 'Ecommerce'

    return (
        <div className="container">
            <Header title={title} />
            <Navbar />
            <ItemListContainer greeting="Bienvenido" />
        </div>
    )
}

export default App;
