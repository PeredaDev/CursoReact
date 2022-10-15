import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";


export default function Card(props) {
  
  const priceStyle = {
    color: props.offer === true ? "green" : "black",
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 style={priceStyle}>
          {props.offer ? <p>Oferta!</p> : <></>}$ {props.price}
        </h4>
      </div>
      <Link to={`/productos/${props.id}`}>
        <Button color={props.color}>{`Compra ${props.title}`}</Button>
      </Link>
    </div>
  );
}
