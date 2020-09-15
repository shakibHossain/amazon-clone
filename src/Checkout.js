import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const AnimatedCheckOut = React.forwardRef(({ item, index }, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        key={`anim ${index} ${item.id}`}
        title={item.title}
        id={item.id}
        rating={item.rating}
        price={item.price}
        image={item.image}
      />
    </div>
  ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          <FlipMove
            staggerDelayBy={150}
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {basket?.map((item, i) => (
              <AnimatedCheckOut
                key={`an ${i} ${item.id}`}
                item={item}
                index={i}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
