import "./SideList.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { carsDataActions, counterActions } from "../../Store/Store";
const SideList = () => {
  const carsData = useSelector((state) => state.carsData.Data);
  const shownState = useSelector((state) => state.shownCard.case);
  const deleteDispatch = useDispatch();
  function deleteAllHandler() {
    deleteDispatch(carsDataActions.deleteAll());
    deleteDispatch(counterActions.rsetart());
  }
  return (
    <>
      {shownState && (
        <div className="SideBar">
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

                    <RiDeleteBin5Line
                      className="delete-icon"
                      onClick={() =>
                        deleteDispatch(carsDataActions.delete(item.name))
                      }
                    />
                  </div>
                </div>
                <img src={item.image} alt="car"></img>
              </div>
            );
          })}
          <button className="deleteAll" onClick={deleteAllHandler}>
            Delete All <RiDeleteBin5Line />
          </button>
        </div>
      )}
    </>
  );
};
export default SideList;
