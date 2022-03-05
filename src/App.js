import './App.css';
import Reviews from './components/Reviews'
import PropTypes from 'prop-types'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function App() {
  return(
    <div className="App">
      <div className="product-card">
        <ProductDescription 
        category="Running"
        name="Nike SuperRep Go"
        description="The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit based fitness classes" 
        price="$69,97"
        isDiscount="yes"/>
        <ProductImage srcimg="/assets/shoe.jpg"/>
      </div>
      <Reviews />
    </div>
  )
}

function CheckDiscount( props ) {
  const { isDiscount, discount } = props;
  if( isDiscount === "yes") {
    return(
      <h2>DISCOUNT {discount}% OFF</h2>
    )
  } else if( isDiscount === "coming") {
    return(
      <h2>Akan ada diskon</h2>
    )
  } else {
    return(
      <p>Belum ada diskon</p>
    )
  }
}

function ProductDescription(props) {
  const { category, name, description, price, isDiscount } = props;
  const benefits = ["Water resistance","Premium material","Comfortable","Flexible" ]
  const listBenefits = benefits.map((itemBenefit) => 
    <li key={itemBenefit}>{itemBenefit}</li>
  )
  return(
    <div className="product-description">
        <span className="category">{category}</span>
        <h1>{name}</h1>
        <p>{description}</p>
        <ul>
          <h3>Benefits</h3>
          {listBenefits}
        </ul>
        <div className="price">
          <h3>{price}</h3>
          <CheckDiscount isDiscount={isDiscount} discount={30} />
        </div>
        <div className="button-cart">
          <a onClick={(e) => TambahCart(name, e)} href="#">
            <FontAwesomeIcon icon="fas fa-shopping-cart" /> Add to cart
          </a>
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

function TambahCart(e) {
  return console.log(`Beli ${e}`);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App;
