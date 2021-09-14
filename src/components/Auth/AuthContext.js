import { createContext } from 'react'

const AuthContext = createContext()

export default AuthContext

export const { Consumer, Provider } = AuthContext