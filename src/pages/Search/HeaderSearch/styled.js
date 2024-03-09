import styled from 'styled-components';
/* import fontSizes from '../../config/fontSizes';
import colors from '../../config/colors'; */

export default styled.header`
  padding-block: .6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.4rem;
  margin-top: -1.5rem;
  transition: .15s grid-template-columns;

  @media screen and (max-width: 975px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1.8fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 32fr 1fr;
  }
`;
