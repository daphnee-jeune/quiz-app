import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './assets/background.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Catamaran', sans-serif;
    background-image: linear-gradient(180deg, #fff, #fff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: #ffcc91;
    border: none;
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    letter-spacing: 1.2px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }
  .start {
    max-width: 200px;
  }
`;