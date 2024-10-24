import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import ErrorPage from "./pages/errorPage/ErrorPage"
import RentalDetail from "./pages/rentalDetail/RentalDetail"
// import { logement } from "./assets/data/logements.json"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: `/rentaldetail/`,
                element: <RentalDetail />
            }
        ]
    }
])
