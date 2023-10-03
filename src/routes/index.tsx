import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Homepage from "../pages/HomePage/Homepage"
import LoginPage from "../pages/LoginPage/LoginPage"


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                index:true,
                element:<Homepage></Homepage>
            }
        ]
    },
    {
        path:'/login',
        element:<LoginPage></LoginPage>
    }
])

export default routes