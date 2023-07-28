import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img className="logo-header"src="./logoRed.png" alt="logo" />
        <h1 className="logo-header">Your Notes</h1>
      </div>
      <div className="right-section">
        <h3>Ar</h3>
        <img src="./Combined Shape.png" alt="moon" />
        <img src="./user.png" alt="user" />
      </div>
    </div>
  );
};
export default Header;
