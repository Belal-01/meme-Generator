 import Imglogo from "../../public/images/Troll Face.png"
const Header = () => {
  
  return (    
  <nav className="nav">
    <div className="nav__logo">
      <img className="nav__logo--img" src={Imglogo} alt="" />
      <h3 className="nav__logo--text">Meme Generator</h3>
    </div>
    <div className="nav__title">
      React Course - Project 3
    </div>
  </nav>
  )
}

export default Header
