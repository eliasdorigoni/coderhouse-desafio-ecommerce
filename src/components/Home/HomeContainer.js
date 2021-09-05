import ItemListContainer from "./../Item/ItemListContainer"
import Services from "../Services"
import Title from "../Misc/Title"

const HomeContainer = () =>
    <div className="md:grid md:grid-cols-4 gap-4 mx-2">
        <div className="col-span-3 mb-4">
            <Title>
                Nuevos mechs de este mes
            </Title>
            <ItemListContainer />
        </div>
        <div>
            <Services />
        </div>
    </div>

export default HomeContainer