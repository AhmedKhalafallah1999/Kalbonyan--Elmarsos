import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";
const Modal = (props) => {
  const closeHandler = (state) => {
    props.onCloseHandler(state);
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modal">
            <Cart
              onCloseHandler={closeHandler}
              outputToCart={props.output}
              outArrayToCart={props.outArray}
            ></Cart>
          </div>
        </div>,
        document.querySelector(".overlay")
      )}
    </Fragment>
  );
};
export default Modal;
