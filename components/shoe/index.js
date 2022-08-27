import "./style.css";

function shoe(productNumber) {
  return /*html*/ `
    <article>
      <img src="Product${productNumber}.png" alt="Jordan Shoe"/>
    </article>
  `;
}

export default shoe;
