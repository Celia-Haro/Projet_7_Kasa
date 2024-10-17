import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Home from './pages/Home'
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import LodgingDetail from "./pages/LodgingDetail"


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
