import './App.css';
//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function App() {
  return(
    <div className="product-card">
      <ProductDescription 
      category="Running"
      name="Nike SuperRep Go"
      description="The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit based fitness classes" 
      price="$69,97"
      discountPrice="$50.00"/>
      <ProductImage srcimg="/assets/shoe.jpg"/>
    </div>
  )
}

function ProductDescription(props) {
  const { category, name, description, price, discountPrice } = props;
  return(
    <div className="product-description">
        <span className="category">{category}</span>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="rating">
          <FontAwesomeIcon icon="fas fa-star" className="rating-icon"/>
          <FontAwesomeIcon icon="fas fa-star" className="rating-icon"/>
          <FontAwesomeIcon icon="fas fa-star" className="rating-icon"/>
          <FontAwesomeIcon icon="fas fa-star" className="rating-icon"/>
          <FontAwesomeIcon icon="fas fa-star" className="rating-icon"/>
        </div>
        <div className="price">
          <h3>{price}</h3>
          <h2>{discountPrice}</h2>
        </div>
        <div className="button-cart">
          <button>
            <FontAwesomeIcon icon="fas fa-shopping-cart" /> Add to cart
          </button>
        </div>
      </div>
  );
}

function ProductImage(props) {
  const { srcimg } = props;
  return (
      <div className="product-image">
        <img src={srcimg} alt="shoes"/>
      </div>
      )
}

export default App;
