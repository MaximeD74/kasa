import Header from "../../components/Header"
import { Link } from 'react-router-dom'
import "../../styles/error.scss"
import Footer from "../../components/Footer/index"

function Error() {
    return (
      <div>
        <Header />
        <div className="error-content">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Error
  