import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";
const Modal = (props) => {
  const onCloseHandler = (a)=>{
    props.onClose(a);
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modal">
            <Cart onClose={onCloseHandler}></Cart>
          </div>
        </div>,
        document.querySelector(".overlay")
      )}
    </Fragment>
  );
};
export default Modal;
