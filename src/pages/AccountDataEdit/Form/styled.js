import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerWrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  max-width: 600px;
  height: calc(100vh - clamp(30px, 20vh, 60px) - 9.8rem);

  @media screen and (max-height: 650px) {
    height: auto;
    margin-top: 2rem;
  }
`;

export const ContainerTop = styled.div`
  h1 {
    text-align: center;
    font-size: ${fontSizes.fontSizeLg};
    color: ${colors.text['900']};
  }
`;

export const ContainerForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 3rem;

  .container-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: .6rem;
    width: 100%;

    .label-placeholder {
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['900']};
      font-weight: 500;
    }

    input.input-field {
      width: 100%;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['900']};
      background-color: ${colors.whtColor};
      font-weight: normal;
      transition: .07s background-color;
    }

    input.input-field:focus {
      outline: 1px solid ${colors.background['200']};
    }

    .container-errors {
      li {
        font-size: calc(${fontSizes.fontSizeBase} - .09rem);
        color: ${colors.secondary['500']};
      }
    }
  }

  .container-input.blocked {
    & > input {
      cursor: not-allowed;
      background-color: ${colors.neutral3};
      box-shadow: inset 0px 0px 10px rgba(0,0,0,0.03);
    }
  }

  .container-submit {
    margin-top: 2rem;
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);

    button {
      width: 100%;
      padding: .6rem 1rem;
      height: unset;
      border-radius: .4rem;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['900']};
      background-color: ${colors.primary['200']};
    }

    button.submit-form {
      grid-column: 2;
    }

    button.submit-form.submit-type {
      grid-column: 1 / -1;
    }

    button.cancel-submit {
      width: 100%;
      padding:.6rem 1rem;
      height: unset;
      border-radius:.4rem;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['900']};
      background-color: ${colors.neutral2};
    }

    button.submit-form:hover {
      background-color: ${colors.primary['300']};
    }
  }

  @media screen and (max-height: 695px) {
    margin-top: 1.5rem;
  }
`;
