import { Link, useRouteError } from 'react-router-dom';

const ErreurPage = () => {
  const error = useRouteError()
  return ( 
    <>
      <h1>Erreur : {error.status}</h1>
      <p>{error.data}</p>
      <Link to={"/"}>Home</Link>
    </>
   );
}
 
export default ErreurPage;