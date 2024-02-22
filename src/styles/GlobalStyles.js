import { createGlobalStyle, styled } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  html, button, input, a {
    font-family: "MuseoModerno", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 14px;
    color: ${colors.text['900']};
  }

  h1 {
    letter-spacing: .08rem;
  }

  body {
    background-color: ${colors.background['50']};
  }

  button {
    height: 35px;
    padding-inline: 19px;
    font-weight: 700;
    border-radius: 100px;
    background-color: unset;
  }

  button.primary {
    background-color: ${colors.primary['950']};
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${colors.text['950']};
    /* font-weight: 500; */
  }

  a.artist-link:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  body .Toastify div.Toastify__toast-body > div:nth-child(2) {
    color: ${colors.text['50']};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.messages.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.messages.error};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background-color: ${colors.messages.warn};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background-color: ${colors.messages.info};
  }
`;

export const Main = styled.main`
  width: 100%;
  margin-bottom: 8rem;

  @media screen and (max-width: 600px) {
    margin-bottom: clamp(60px, 40vh, 155px);
  }
`;

export const WrapperMainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: clamp(0.3rem, -0.414rem + 1.667vw, 1.3rem);
  gap: clamp(1rem, -0.429rem + 3.333vw, 3rem);

  @media screen and (max-width: 600px) {
    display: block;
    padding-inline: clamp(1rem, -0.414rem + 1.667vw, 1.3rem);
  }
`;

export const WrapperRightContent = styled.div`
  width: 100%;
`;
