import "../../styles/footer.scss"
import logo from "../../assets/logo/logo.png"

function Footer ({ extraClassName}) {
    return (
        <div className={`footer-container ${extraClassName}`}>
            <img className="logo" src={logo} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer