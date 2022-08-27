import "./style.css";

function shoe(productNumber) {
  return /*html*/ `
    <a href="#">
      <img src="Product${productNumber}.png" alt="Jordan Shoe"/>
    </a>
  `;
}

export default shoe;
