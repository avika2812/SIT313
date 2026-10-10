import '../App.css'
import './Footer.css'
function Footer() {
  return (
    <footer>

      <div className="newsletter">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>

        <input type="email" placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>


      <div className="footer-content">

        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>


        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>


        <div>
          <h4>Stay Connected</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

      </div>


      <div className="footer-bottom">

        <p>DEV@Deakin 2022</p>

        <div>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>

      </div>

    </footer>
  )
}

export default Footer