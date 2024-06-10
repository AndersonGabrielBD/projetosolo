import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to = {`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to = {`/`} className='home'>Home</Link>
            </li>
            <li>
                <Link to = {`/new`} className='new-postbnt'>Novo Post</Link>
            </li>
            <li>
                <Link to = {`/admin`} className='gerenciar's>Gerenciar</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
