import styled from 'styled-components';
/* import fontSizes from '../../config/fontSizes';
import colors from '../../config/colors'; */

export default styled.header`
  padding-block: .6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1.8fr 1fr;
  }
`;
