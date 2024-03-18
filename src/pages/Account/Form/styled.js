import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerWrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  max-width: 600px;
  height: max(500px, calc(100vh - clamp(30px, 20vh, 60px) - 4rem));

  &.login-form {
    height: max(390px, calc(100vh - clamp(30px, 20vh, 60px) - 4rem));
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

  @media screen and (max-height: 700px) {
    margin-top: 1.5rem;
  }

  .container-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: .6rem;
    width: 100%;

    @media screen and (max-height: 700px) {
      margin-bottom: .3rem;
    }

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

  .container-submit {
    margin-top: 2rem;

    button.submit-form {
      width: 100%;
      padding: .6rem 1rem;
      height: unset;
      border-radius: .4rem;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['900']};
      background-color: ${colors.primary['200']};
    }

    button.submit-form:hover {
      background-color: ${colors.primary['300']};
    }
  }
`;

export const ContainerChangeType = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-size: ${fontSizes.fontSizeBase};

  @media screen and (max-height: 700px) {
    margin-top: 1.5rem;
  }

  .container-change-type {
    display: flex;
    gap: .4rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button.btn-change {
      height: unset;
      font-weight: 400;
      padding-inline: unset;
      font-weight: 600;
      font-size: ${fontSizes.fontSizeBase};
    }

    button.btn-change:hover {
      text-decoration: underline;
    }
  }
`;
