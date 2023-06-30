import { Link } from 'react-router-dom'
import "../../styles/navigation.scss"

function Navigation() {
  return (
    <nav className='nav'>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Navigation