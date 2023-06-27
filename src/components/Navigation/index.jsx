import { Link } from 'react-router-dom'
import "../../styles/navigation.scss"

function Navigation() {
  return (
    <nav className='nav'>
      <Link to="/" className='link'>Accueil</Link>
      <Link to="/about" className='link'>A propos</Link>
    </nav>
  )
}

export default Navigation