import ItemListContainer from "./../Item/ItemListContainer"
import Services from "../Services"
import Title from "../Misc/Title"
import CallToAction from "./CallToAction"

const HomeContainer = () =>
    <>
        <div className="md:grid md:grid-cols-4 gap-4 mx-2 mb-6">
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
        <CallToAction />
    </>

export default HomeContainer