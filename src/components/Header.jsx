import "../CSS/header.css"
import { Link } from 'react-router-dom';



function Header() {
    return (
        <>
            <header className="header">
                <div className="header-list">
                    <div className="header1">
                        <h3>MEDSPRINT</h3>
                    </div>
                    <div className="header2">
                        <a href="#">HOME</a>
                        <a href="#">SHOP</a>
                        <a href="#">CONTACT</a>
                        <a href="#">ABOUT US</a>
                         
                    </div>
                    <div className="header3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <Link to="/login">LOG-IN</Link>
                        <Link to="/signup">SIGN-UP</Link>
                    </div>
                </div>
                <div>
                    <p className="header4">Your Trusted Pharmacy Partner</p>
                    <p className="header5">we provide medicine, injections etc.. </p>
                    <p className="header5">with 10% off on medicine & other exclusive offers.</p>
                </div>

            </header>
        </>
    )



}
export default Header