import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import ErrorPage from "./pages/error/ErrorPage"
import RentalPage from "./pages/rental/RentalPage"

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
                path: '/rentalpage/:id',
                element: <RentalPage />
            }
        ]
    }
])
