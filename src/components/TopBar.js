import CartWidget from "./CartWidget"

const TopBar = ({cartItemCount}) =>
    <div className="bg-black font-body px-2 py-1 mb-2">
        <div className="container mx-auto">
            <CartWidget itemCount={cartItemCount} />
        </div>
    </div>

export default TopBar