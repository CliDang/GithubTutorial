import "./ChiTieuItem.css";
import DateFormat from "./DateFormat";

function ChiTieuItem(props) {
  return (
    <div>
      <div>Hello world</div>
      <div className="expense-item">
        <DateFormat date={props.date}></DateFormat>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.cost}</div>
        </div>
      </div>
    </div>
  );
}

export default ChiTieuItem;
