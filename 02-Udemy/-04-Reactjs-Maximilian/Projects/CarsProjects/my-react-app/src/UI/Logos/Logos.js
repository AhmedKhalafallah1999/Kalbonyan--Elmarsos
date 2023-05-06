import './Logos.css'
import Logo1 from "./logos/1.png";
import Logo2 from "./logos/2.png";
import Logo3 from "./logos/3.png";
import Logo4 from "./logos/4.png";
import Logo5 from "./logos/5.png";
import Logo6 from "./logos/6.png";
import Logo7 from "./logos/7.png";
import Logo8 from "./logos/8.png";
const Logos = () => {
  return (
    <div className='logos-section'>
    <div className="container logos">
    <img src={Logo1} alt="logo"></img>
    <img src={Logo2} alt="logo"></img>
    <img src={Logo3} alt="logo"></img>
    <img src={Logo4} alt="logo"></img>
    <img src={Logo5} alt="logo"></img>
    <img src={Logo6} alt="logo"></img>
    <img src={Logo7} alt="logo"></img>
    <img src={Logo8} alt="logo"></img>
  </div>
  </div>

  )
};
export default Logos;
