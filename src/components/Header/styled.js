import styled from 'styled-components';
import fontSizes from '../../config/fontSizes';
import colors from '../../config/colors';

export default styled.header`
  padding-block: .6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.4rem;

  .container-search {
    grid-column: 2;
    width: 100%;
    position: relative;

    .search-btn {
      height: unset;
      padding: unset;
      position: absolute;
      top: 50%;
      left: .5rem;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      background-color: ${colors.primaryDarker};
      width: 100%;
      border-radius: 8px;
      height: 50px;
      padding-block: .5rem;
      padding-inline: 2rem 1rem;
    }

    input, input::placeholder {
      font-size: ${fontSizes.fontSizeBase};
    }

    input::placeholder {
      color: ${colors.neutral2};
    }
  }
`;
