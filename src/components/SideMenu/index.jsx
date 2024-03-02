import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { LuLibrary, LuUserCircle2 } from 'react-icons/lu';
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
          className={`container-link ${currentPath === '/search' && 'active'}`}
          to="/search"
        >
          <div
            className={`container-icon ${currentPath === '/search' && 'active'}`}
          >
            <IoSearch size="22" />
          </div>
          <span>Buscar</span>
        </Link>
      </ContainerTopContent>
      <ContainerBottomContent>
        <Link
          className={`container-link ${currentPath === '/library' && 'active'}`}
          to="/library"
        >
          <div
            className={`container-icon ${currentPath === '/library' && 'active'}`}
          >
            <LuLibrary size="24" />
          </div>
          <span>Biblioteca</span>
        </Link>
        <Link
          className={`container-link ${currentPath === '/account' && 'active'}`}
          to="/account"
        >
          <div
            className={`container-icon ${currentPath === '/account' && 'active'}`}
          >
            <LuUserCircle2 size="24" />
          </div>
          <span>Conta</span>
        </Link>
      </ContainerBottomContent>
    </ContainerSideMenu>
  );
}
