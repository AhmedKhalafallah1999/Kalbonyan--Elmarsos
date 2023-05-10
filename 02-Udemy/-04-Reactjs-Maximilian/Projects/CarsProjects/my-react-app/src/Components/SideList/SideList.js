import "./SideList.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { carsDataActions, counterActions } from "../../Store/Store";
// import { useEffect } from "react";
const SideList = () => {
  const carsData = useSelector((state) => state.carsData.Data);
  const shownState = useSelector((state) => state.shownCard.case);
  const deleteDispatch = useDispatch();
  const counterDispatch = useDispatch();
  const carsDataDispatch = useDispatch();
  // const DataSelector = useSelector((state) => state.carsData.Data);
  function deleteAllHandler() {
    deleteDispatch(carsDataActions.deleteAll());
    deleteDispatch(counterActions.rsetart());
  }

  // useEffect(() => {
  //   DataSelector.forEach((item) => {
  //     const input_value = document.getElementById("cart" + item.name);
  //     if (input_value) input_value.value = item.Amount;
  //   });
  // }, [DataSelector]);

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
                    <button
                      className="minus"
                      onClick={() => {
                        counterDispatch(counterActions.decrement());
                        carsDataDispatch(carsDataActions.decreament(index));
                        // setAmount(index);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="Amount"
                      id={"cart" + item.id}
                      value={0}
                    />
                    <button
                      className="plus"
                      onClick={() => {
                        counterDispatch(counterActions.increament());
                        carsDataDispatch(
                          carsDataActions.increament({
                            id: index,
                            seats: item.seats,
                            name: item.name,
                            info: item.class,
                            image: item.image,
                            Amount: 1,
                          })
                        );
                        // setAmount(index);
                      }}
                    >
                      +
                    </button>

                    <RiDeleteBin5Line
                      className="delete-icon"
                      onClick={() => {
                        deleteDispatch(carsDataActions.delete(item.name));
                        deleteDispatch(
                          counterActions.decreaseByAmount(item.Amount)
                        );
                      }}
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
