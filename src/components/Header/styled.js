import styled from 'styled-components';
import colors from '../../config/colors';

export default styled.header`
  border-bottom: 1px solid ${colors.neutral1};
  padding-block: .6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: .2rem;
  }
`;
