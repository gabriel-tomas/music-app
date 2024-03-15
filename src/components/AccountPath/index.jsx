import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { ContainerPaths, ContainerLink } from './styled';

const accountPaths = {
  conta: '/account',
  'meus dados': '/account/data',
  'editar meus dados': '/account/data/edit',
};

export default function AccountPath({ paths }) {
  return (
    <ContainerPaths>
      {paths.map((path, i) => (
        <ContainerLink>
          <MdKeyboardArrowRight />
          <Link key={i} to={accountPaths[path.toLowerCase()]}>
            {path}
          </Link>
        </ContainerLink>
      ))}
    </ContainerPaths>
  );
}

AccountPath.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};
