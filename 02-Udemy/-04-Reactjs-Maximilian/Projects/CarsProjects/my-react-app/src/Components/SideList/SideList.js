import "./SideList.css";
import { useSelector } from "react-redux";
const SideList = () => {
  const carsData = useSelector((state) => state.carsData.Data);
  const shownState = useSelector((state) => state.shownCard.case);
  return (
    <>
    {shownState && <div className="SideBar">
      {carsData.map((item, index) => {
        return (
          <div className="cart-busket" key={index}>
            <div className="cart-busket-info">
              <h1 className="name-car">{item.name}</h1>
              <p>{item.info}</p>
              <div className="right-description">
                <button className="minus">-</button>
                <span>{item.Amount}</span>
                <button className="plus">+</button>
              </div>
            </div>
            <img src={item.image} alt="car"></img>
          </div>
        );
      })}
    </div>}</>
  );
};
export default SideList;
