import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return ( 
    <>
      <nav>
        <Link to={"/"} className="li">Home</Link>
        <Link to={"/form"} className="li">Formulaire</Link>
        <Link to={"/compo"} className="li">Composant</Link>
      </nav>
      <div>
        <Outlet />
      </div>
      
    </>
   );
}
 
export default NavBar;