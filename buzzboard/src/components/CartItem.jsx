import "./CartItem.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <span>
        {item.name} - ${item.price}
      </span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
