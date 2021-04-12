import { Link } from "react-router-dom";
import { User } from "../../providers/UserProvider";
import Logout from "../Loggout";
import { Head } from "./style";

const Navegation = () => {
  const { loggedUser } = User();

  return (
    <Head>
      <Link to="/home">Principal</Link>
      {loggedUser.type === "pj" && <Link to="/users/comp">Empresa</Link>}
      {loggedUser.type === "pf" && <Link to="/users/dev">Usuario</Link>}
      <Link to="/pesquisa">Pesquisa</Link>
      <Logout />
    </Head>
  );
};

export default Navegation;
