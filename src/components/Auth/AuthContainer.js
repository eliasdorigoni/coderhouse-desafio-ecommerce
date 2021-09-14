import { useContext } from 'react'
import Auth from "./Auth"
import AuthContext from './AuthContext'
import UserAccount from './UserAccount'

const AuthContainer = () => {
    const context = useContext(AuthContext)

    if (context.hasUser()) {
        return (
            <UserAccount user={context.user} onSignOut={context.signOut} />
        )
    } else {
        return (
            <Auth onAuthenticate={context.signIn} />
        )
    }
}

export default AuthContainer