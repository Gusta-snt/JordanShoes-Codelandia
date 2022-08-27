import shoe from "../shoe";
import "./style.css";

function main() {
  let shoes = "";
  for (let i = 1; i <= 8; i++) {
    shoes += shoe(i);
  }

  return /*html*/ `
    <main>
      <section id="home">
        <h1>A melhor loja de Jordan</h1>
        <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
      </section>
      <section id="content">
        <h2>Destaques</h2>
        <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
        <div id="shoes">
          ${shoes}
        </div>
      </section>
    </main>
  `;
}

export default main;
