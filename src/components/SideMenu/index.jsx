import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import {
  ContainerSideMenu,
  ContainerTopContent,
  ContainerBottomContent,
} from './styled';

export default function SideMenu() {
  const location = useLocation();
  const currentPathName = location.pathname;
  const [currentPath, setCurrentPath] = useState(currentPathName);

  useEffect(() => {
    setCurrentPath(currentPathName);
  }, [currentPathName]);

  return (
    <ContainerSideMenu>
      <ContainerTopContent>
        <Link
          className={`container-link ${currentPath === '/' && 'active'}`}
          to="/"
        >
          <div className={`container-icon ${currentPath === '/' && 'active'}`}>
            <FaHome size="22" />
          </div>
          <span>Home</span>
        </Link>
        <Link
          className={`container-link ${currentPath === '/categories' && 'active'}`}
          to="/categories"
        >
          <div
            className={`container-icon ${currentPath === '/categories' && 'active'}`}
          >
            <IoGrid size="22" />
          </div>
          <span>Categorias</span>
        </Link>
      </ContainerTopContent>
      <ContainerBottomContent></ContainerBottomContent>
    </ContainerSideMenu>
  );
}
