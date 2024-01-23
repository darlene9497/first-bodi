import './footer.css'
import instagram from'../../assets/instagram.png'
import facebook from'../../assets/fb.png'
import twitter from'../../assets/twitter.png'
import logo from'../../assets/firstbodilogo.png'
import youtube from'../../assets/youtube.png'

export default function Footer() {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={instagram} alt="" />
                <img className="twitter" src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img className="yt" src={youtube} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
            <div className="instructor">
              <span>© All rights reserved 2024</span>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}
