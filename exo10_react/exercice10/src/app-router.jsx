import {createBrowserRouter} from "react-router-dom"
import Contact from './component/Contact'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Contact />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])
  
  export default router