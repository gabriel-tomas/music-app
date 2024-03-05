import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0, 0, 0, 0.75);
  }

  span {
    z-index: 102;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 3px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 1.5s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
