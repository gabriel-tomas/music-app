import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoDiscSharp } from 'react-icons/io5';
import { RiAlbumLine } from 'react-icons/ri';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { toast } from 'react-toastify';

import { ContainerPlaylists, ContainerPlaylistItem } from './styled';

import colors from '../../config/colors';

export default function Playlists({
  playlists,
  showDescription,
  showOwner,
  slowAppearanceAnimation,
}) {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      playlists.map((playlist) =>
        loadImage(getAlbumImageUrl(playlist.images, 300)),
      ),
    )
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error(
          'Ocorreu um erro ao tentar carregar a imagem das playlists',
        ),
      );
  }, []);

  return (
    <ContainerPlaylists
      className={`${slowAppearanceAnimation && 'slow-appearance-animation'}`}
    >
      {playlists &&
        playlists.map((playlist, index) => {
          return (
            playlist && (
              <ContainerPlaylistItem
                key={index}
                to={`/playlist/${playlist.id}`}
              >
                <div>
                  <div className="container-img">
                    {playlist.images.length === 0 ? (
                      <IoDiscSharp />
                    ) : imgsLoaded ? (
                      <img
                        src={getAlbumImageUrl(playlist.images, 300)}
                        alt={playlist.name}
                      />
                    ) : (
                      <RiAlbumLine color={colors.neutral7} />
                    )}
                  </div>
                  <div className="secondary-content">
                    <span className="playlist-name">{playlist.name}</span>
                    {playlist.description && showDescription && (
                      <p className="playlist-description">
                        {playlist.description}
                      </p>
                    )}
                    {showOwner && (
                      <div className="owner-box">
                        <span className="owner">
                          {playlist.owner.display_name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContainerPlaylistItem>
            )
          );
        })}
    </ContainerPlaylists>
  );
}

Playlists.defaultProps = {
  showDescription: false,
  showOwner: true,
  slowAppearanceAnimation: false,
};

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  showDescription: PropTypes.bool,
  showOwner: PropTypes.bool,
  slowAppearanceAnimation: PropTypes.bool,
};
