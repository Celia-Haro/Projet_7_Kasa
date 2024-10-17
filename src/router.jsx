import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import ErrorPage from "./pages/errorPage/ErrorPage"
import LodgingDetail from "./pages/rentalDetail/RentalDetail"


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
                path: '/lodgingdetail',
                element: <LodgingDetail />
            }
        ]
    }
])
