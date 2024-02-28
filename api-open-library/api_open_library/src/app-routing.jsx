import {createBrowserRouter} from "react-router-dom"
import BookList from "./component/BookList"
import BookDetails from "./component/BookDetails"


const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />
    },
    {
      path: "/works/:olid",
      element: <BookDetails/>
    }
    
  ])
  
  export default router