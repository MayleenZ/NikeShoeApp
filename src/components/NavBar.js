import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../App";

function NavBar() {
  const productContextValue = useContext(ProductContext);
  const { cart } = productContextValue;
  return (
    <div>
      <div className="nike-img">
        <Link to="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////29vaxsbGQkJD8/Pzi4uK4uLicnJzT09O2trYzMzO/v797e3slJSXn5+dUVFRaWlpra2ulpaXGxsY8PDzc3NxycnIMDAxISEipqakrKyvMzMweHh6CgoIZGRlkZGSTk5NMTEx4eHg6Ojru7u7SO5HOAAAC6ElEQVR4nO3a63qiMBSF4QZQsOIBFTwUra3j/d/iKFBHIVRAc3Ce7/0vO1tXIIm8vQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvZ2V6AKqt12brf/5RXGDsKy7wq2gT7FXXcD5UV6gz9Aa996HyMpNQeQmpUeiIo6ehUCrGGqqU7N2JECKd6qjlilRHmSvfQXLqTvQ2Wy3lPCEiLYVyQy8VmclOU8WZEI6mUm+f54mXW2iJ51l8qjbXUmmWTTyRx/NTS8lM71RQ/dM+mifiQls8M32hPKTxVyqu6Itnxj/XVPgw3O4uEy+P51xjPM9GWVlVj9zl+1HcmIwUVao1zAureFZE874oWXwrqHNH8RU/e+O0/hqUu9Mfz4xbVH/mNbe7Ra/Snuhrj2cm+vl6n3bFpX+sdmcmnhnnqR3uN5WJV8TT2OmBexnEw5daB9WJZzSemfjfMB7aOg13qWTiFfE0ejRytYqadb3G6uA7dd2ZjGdmdjUWt9MV9ptJbXdm45m7vum1X5dOg6S2t7PQ8MndyfJmQIc2H73sYOs4gQ1nr7cBa/wjrkZh/cQr4tnq61JmWhpWo9PSqx2szfHMLcoju7e9uNnB1nECLYNvpDq6XwYXSxbSEpbEM7eTDDCV3h7G0oW0hDXxzMl/E7f058j2IF9IV9kUz1zdSI+hN/uO43i69NzBvZvmRbI03U9FdH/UzYWx6XYkgqe1Z188c5VnRUcWxrMg36q2ZWU8C43vIfVsjWfh4f7sjWfhwf58i+NZeKQ9y+NZ6D4PrY9nodFCWsJX/c7L02y6tOd8mR52Cx1WbUnn8zgz2k7E14nnD69Ney8Vz4uG+76TwYvF88e6YX8aXjhTRXaOUablhTN17k7Fhc73pJQ4/NZeovWNF1U+6pY2iWfiL3clouofEJP3F1l5Nrbz+8V5qJOE6l9FNmU1/m9iCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjxF/AhHBmrwn6SAAAAAElFTkSuQmCC"
            alt="nike=logo"
            width="150px"
          />
        </Link>
      </div>
      <div className="nav">
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/shoes" className="nav">
          Shoes
        </Link>
        <Link to="/checkout" className="nav">
          Checkout: {cart.length > 0 ? cart.length : null}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
