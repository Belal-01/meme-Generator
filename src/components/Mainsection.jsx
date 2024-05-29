import memeImg from "../../public/images/memeimg.png"

const Mainsection = () => {
  return (
   <div className="mainSection">
   <div className="input">
      <div className="input__top">
        <label className="input__top-label" htmlFor="inputTopText">Top text</label>
        <input type="text" className="input__top-bar" id="inputTopText"  />
      </div>
      <div className="input__buttom">
        <label className="input__buttom-label" htmlFor="inputTopText">Bottom text</label>
        <input type="text" className="input__buttom-bar" id="inputTopText"  />
      </div>
    </div>
    <div className="mainSection__button">
      <button>Get a new meme image &#128229;</button>
    </div>
    <div className="mainSection__img">
      <img src={memeImg} alt="meme Img" />
    </div>
   </div>
  )
}

export default Mainsection
