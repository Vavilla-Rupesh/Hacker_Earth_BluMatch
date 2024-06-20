import React, { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import FrontImage from "./FrontImage.jsx";
import Login from "./Loogin.jsx";
import About from "./About.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Main from "./Main.jsx";
import Contact from "./components/Contact.jsx";
import Business from "./Business.jsx";
import Products from "./Products.jsx";
import Welcome from "./components/Welcome.jsx";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./components/CardContext.jsx";
import BusinessDescription from "./components/BusinessDescription.jsx";
import ProductDescription from "./components/ProductDescription.jsx";
import ProductsShow from "./components/ProductsShow.jsx";
import Dashboard from "./Dashboard.jsx";
export const UserContext = createContext();

const App = () => {
  const location = useLocation();
  const [headerState, setHeaderState] = useState("type1");

  return (
    <UserContext.Provider value={{ headerState, setHeaderState }}>
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={3000}
            nodeRef={React.createRef()}
          >
            <Routes location={location}>
              <Route path="/" element={<FrontImage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/main" element={<Main />} />
              <Route path="/business" element={<Business />} />
              <Route path="/products" element={<Products />} />
              <Route path="/business-dashboard" element={<Welcome />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/BusinessDescription"
                element={<BusinessDescription />}
              />
              <Route
                path="/Add-products"
                element={<ProductDescription />}
              />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Business-products" element={ <ProductsShow />} /> 

            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const rootDom = document.getElementById("root");
const root = createRoot(rootDom);

root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
