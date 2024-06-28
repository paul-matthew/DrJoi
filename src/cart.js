import React, { useEffect, useState } from "react";
import "./App.css";
import "./style.css";
import { CartItem } from "./components/CartItem/index.jsx";
import { useProducts } from "./components/ProductsContext/index.jsx";
import { cartUtilities } from "./utils/cart.js";
import { handleCart, updateTotalCartItemOnShopModal } from "./products.js";

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const { products } = useProducts();

  function getCartItems() {
    const skus = localStorage.getItem("selectedSKUs");
    const parsedSkus = JSON.parse(skus);
    setCartItem(() => parsedSkus);
  }

  useEffect(() => {
    getCartItems();
    handleCart();
  }, []);

  function clear() {
    const isConfirmed = window.confirm("Remove all items from your cart?");
    if (isConfirmed) {
      cartUtilities.clear();
      getCartItems();
      updateTotalCartItemOnShopModal();
    }
  }

  return (
    <section style={{ minHeight: "100vh" }}>
      <div id="NavlogoMobile">
        <img
          src="./logo-green3.png"
          alt="logo mobile"
          style={{
            height: "7vh",
            marginTop: "0vh",
            position: "fixed",
            left: 10,
            top: 10,
          }}
          onClick={() => (window.location.href = "./")}
        />
      </div>
      <div className="Banner">
        <img
          src="./bannerflower.png"
          alt="banner"
          style={{
            zIndex: 2,
            width: "100vw",
            maxHeight: "200px",
            marginTop: "3vh",
            left: 0,
            top: 0,
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="SectionTitle"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "3vh",
          display: "flex",
        }}
      >
        <div
          className="MySkill"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 56.67,
            display: "inline-flex",
            padding: "0px 3vw",
          }}
        >
          <div
            className="Content"
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              display: "flex",
            }}
          >
            <div
              className="MyExpertise"
              style={{
                alignSelf: "stretch",
                color: "#282938",
                fontSize: "clamp(40px, 4vw, 61px)",
                fontFamily: "PlayfairDisplay",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Cart
            </div>
            <div style={{color:'black',fontSize:'16px'}}>Shipping limited to US & CA only</div>
          </div>
        </div>
      </div>
      <div
        className="container-xl"
        style={{
          position: "relative",
          paddingTop: "5rem",
        }}
      >
        <div
          id="cart-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <button onClick={clear} id="clearButton" className="clear-btn">
            clear
          </button>
          {cartItem.map((product, i) => {
            return (
              <CartItem
                key={i}
                update={getCartItems}
                product={products.find((prod) =>
                  prod.variants.find((vars) => vars.sku === product.id)
                )}
                {...product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cart;
