import {useState} from 'react'
import createContext from '../utils/createContext'

interface IAppState {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const [useAppContext, AppProvider] = createContext<IAppState>()

export const AppState: React.FunctionComponent = ({children}) => {
  const [loading, setLoading] = useState(false)

  return <AppProvider value={{loading, setLoading}}>{children}</AppProvider>
}
