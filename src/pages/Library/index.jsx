import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { getPlaylists } from '../../services/backend/library/index';

import Loading from '../../components/Loading';
import NotLogged from './NotLogged';

export default function Library() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState({});

  useEffect(() => {
    const requestUserPlaylists = async () => {
      setIsLoading(true);
      try {
        const response = await getPlaylists();
        setUserPlaylists(response);
        setIsLoading(false);
      } catch (err) {
        /* const responseData = get(err.response, 'data', ''); */
        const status = get(err.response, 'status', 0);
        setIsLoading(false);

        if (status === 401) {
          /* responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg)); */
          setIsLoggedIn(false);
        } else {
          toast.error(
            'Ocorreu um erro desconhecido ao tentar acessar as informações das playlists',
          );
        }
      }
    };
    requestUserPlaylists();
  }, []);

  return (
    <>
      {isLoggedIn === false && <NotLogged />}
      <Loading isLoading={isLoading} />
    </>
  );
}
