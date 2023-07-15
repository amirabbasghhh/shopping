import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.css";
import Navbar from "../../components/navabar/Navbar";
//contex
import { CartContex } from "../../contex/CartContexProvider";
const Cart = () => {
  const { state, dispatch } = useContext(CartContex);
  return (
    <div className={styles.total}>
      <Navbar />
      <div style={{ padding: "20px 60px" }}>
        {
          <div className={styles.row}>
            <div className={styles.col1}>
              {state.selectedItems.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
            <div
              className={styles.col2}
              style={{ position: "sticky", top: "100px" }}
            >
              <div
                style={{
                  marginInline: "40px",
                  border: "1px solid lightGrey",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#0996ed" }}>
                  Total Items :
                </span>{" "}
                <span>{state.itemsCounter}</span> <br />
                <br />
                <span style={{ fontWeight: "bold", color: "#0996ed" }}>
                  Total Payments :
                </span>{" "}
                {state.totalPrice} $ <br />
                <br />
                <div className={styles.footer}>
                  <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                    <Link>Checkout</Link>
                  </button>
                  <button onClick={() => dispatch({ type: "CLEAR" })}>
                    <Link>Clear</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
        {state.checkout && (
          <div
            style={{
              border: "1px solid lightGrey",
              borderRadius: "15px",
              padding: "50px 60px",
              margin: "20px 80px",
              width: "30%",
            }}
          >
            <h3>you checked out successfulyy</h3>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#0996ed",
                padding: "8px",
                borderRadius: "10px",
              }}
              to="/"
            >
              buy more
            </Link>
          </div>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <div   style={{
            border: "1px solid lightGrey",
            borderRadius: "15px",
            padding: "50px 60px",
            margin: "20px 80px",
            width: "30%",
           } }>
            <h3>want to buy?</h3>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#0996ed",
                padding: "8px",
                borderRadius: "10px",
              }}
              to="/"
            >
              Go to shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
