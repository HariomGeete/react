import React from 'react'
import './Footer.css'
import { BiColor, BiLogoFacebook, BiLogoInstagram, BiLogoPinterest, BiLogoYoutube } from 'react-icons/bi'
const Footer = () => {
  return (
    <div><footer id="footer">
      <div class="foot1">

        <h1>Store Location</h1><br />
        <p>
          MR 10 Street Metro Station <br />
          Indore(M.P) , CA 94158 <br />
          Shopblind@mysite.com <br />
          123-456-7890</p>
      </div>
      <div class="foot2">
        <h1>Shop</h1>
        <a href="#">Shop All</a>
        <a href="#">Computers</a>
        <a href="#">Tablets</a>
        <a href="#">Drones & Cameras</a>
        <a href="#">Audio</a>
        <a href="#">Mobile</a>
        <a href="#">T.V & Home Cinema</a>
        <a href="#">Watches</a>
      </div>
      <div class="foot3">
        <h1>Customer Support</h1>
        <a href="#">Contact Us</a>
        <a href="#">Help Center</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
      </div>
      <div class="foot4">
        <h1>Policy</h1>
        <a href="#">Shipping & Returns</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Payment Methods </a>
        <a href="#">FAQ</a>
      </div>

    </footer>
      <div class="pay">
        <p>We accept the following paying methods</p>
        <img src="/payment.png" alt="Payment Method" />
      </div>
      <div class="last">
        <p>© 2035 by TechShed. Powered and secured by Wix</p>
        <div className='site'>
          <BiLogoFacebook className="icon_footer" style={{ color: "blue" }} />
          <BiLogoInstagram className="icon_footer" style={{ color: "#C13584" }} />
          <BiLogoPinterest className="icon_footer" style={{color: "#E60023"}} />
              <BiLogoYoutube className = "icon_footer" style = {{ color: "#FF0000" }
          } />
        </div>
      </div>
    </div>
  )
}

export default Footer