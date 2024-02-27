import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import AddTodo from "./component/Addtodo"
import Updatetodo from "./component/Uptadetodo"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/addtodo",
      element: <AddTodo />
    },
    {
        path: "/updatetodo/:id",
        element: <Updatetodo/>
    }
  ])
  
  export default router