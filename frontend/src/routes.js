import MainPage from "./pages/main"
import {MAIN_ROUTE} from "./utils/consts"
export const authRoutes = []

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    }    
]