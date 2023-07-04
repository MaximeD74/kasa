import "../../styles/footer.scss"
import logo from "../../assets/logo/logo.png"

function Footer ({ extraClassName}) {
    return (
        <div className={`footer-container ${extraClassName}`}>
            <img className="logo" src={logo} alt="Logo" />
            <div className="footerText">
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </div>
    )
}

export default Footer