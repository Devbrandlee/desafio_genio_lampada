import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;  
}


html, body {
  height: 100%;
  width: 100%;
}

body {
  font-family: "Sevillana", cursive;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  overflow-x: hidden;
  background-position: center;
  background-repeat: repeat;
  width: 100vw;
  // min-height: 100vh;

}

.lamp{
  //height:55vh;
  width: 35%;

  @media (max-width: 500px){
    margin-left: 5rem;
  
    width: 70%;
  }
}

main {
  min-height: 100vh; /* Garante que o main ocupe a altura total da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

//Como é um projeto simples vou aplicar o estilo aqui.

const Titulo = styled.h1`
  color: rgba(224, 255, 255, 1);
  background-color: rgba(211, 211, 211, 0.3); /* Cor de fundo */
  padding: 10px; /* Espaçamento interno */
  border-radius: 50px; /* Bordas arredondadas */
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: 300;
  font-size: 1.8rem;

  @media (max-width: 500px) {
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }
`;

const SubTitulo = styled.h2`
  color: rgba(224, 255, 255, 1);
  background-color: rgba(200, 162, 200, 0.2);
  padding: 4px;
  margin-top: 1rem;
  border-radius: 21px;
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 500px) {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
`;

const SubTituloH3 = styled.h3`
  color: rgba(224, 255, 255, 1);
  background-color: rgba(200, 162, 200, 0.2);
  padding: 4px;
  margin-top: 1rem;
  border-radius: 21px;
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const BotaoVNW = styled.button`
  font-family: "Sevillana", cursive;
  font-size: 21px; /* Ajuste do tamanho da fonte */
  margin-left: 1rem; /* Margin à esquerda */
  background-color: rgba(0, 123, 255, 0.6); //Cor do botão
  color: white; /* Cor do texto */
  border: none; /* Remover borda padrão */
  border-radius: 20px; /* Bordas arredondadas */
  margin-top: 1rem;
  padding: 10px 20px; /* Espaçamento interno */
  cursor: pointer; /* Cursor em formato de mão ao passar sobre o botão */

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
    transform: scale(1.2);
    transition: transform 0.4s ease-in-out;
  }
  @media (max-width: 500px) {
    background-color: rgba(138, 43, 226, 0.7);
    margin-bottom: 1rem;
    &:hover {
      background-color: rgba(
        148,
        0,
        211,
        0.7
      ); /* Cor lilás ao passar o mouse */
    }
  }
`;

export default function App() {
  //Variável especial do useState
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>
        No Vai Na Web, você pode ir além dos seus limites e transformar seus
        sonhos em realidade, como em um verdadeiro conto de fadas digital.
      </Titulo>
      <SubTituloH3>Conheça o Vai Na Web</SubTituloH3>
      <a href="https://vainaweb.com.br/" target="_blank">
        <BotaoVNW>Saiba Mais</BotaoVNW>
      </a>

      <SubTitulo>
        "Venha fazer parte dessa jornada e liberte a magia da programação com a
        lâmpada de Aladim."
      </SubTitulo>
      <img
        class="lamp"
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
        }
        alt="Lâmpada"
      />
      <BotaoVNW onClick={trocarLampada}>Clique Aqui</BotaoVNW>
    </main>
  );
}
