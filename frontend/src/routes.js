import MainPage from "./pages/main"
import MasterPage from "./pages/master"
import GetAllPage from './pages/getall'
import {GETALL_ROUTE, MAIN_ROUTE, MASTER_ROUTE} from "./utils/consts"
export const authRoutes = []

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: MASTER_ROUTE,
        Component: MasterPage
    },
    {
        path: GETALL_ROUTE,
        Component: GetAllPage
    }

]