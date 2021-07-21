const Header = ({title,children}) => {
    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
        </header>
    )
}

export default Header