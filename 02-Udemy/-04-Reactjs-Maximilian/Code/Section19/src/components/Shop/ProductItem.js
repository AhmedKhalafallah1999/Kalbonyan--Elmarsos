import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
const ProductItem = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(cartActions.increament());
  };
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;