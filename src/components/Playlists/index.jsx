import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoDiscSharp } from 'react-icons/io5';
import { RiAlbumLine } from 'react-icons/ri';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { toast } from 'react-toastify';

import { ContainerPlaylists, ContainerPlaylistItem } from './styled';

import colors from '../../config/colors';

const PlaylistImage = ({ playlistImages, playlistName }) => {
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

    loadImage(getAlbumImageUrl(playlistImages, 300))
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error(
          'Ocorreu um erro ao tentar carregar a imagem das playlists',
        ),
      );
  }, []);

  return playlistImages.length === 0 ? (
    <IoDiscSharp />
  ) : imgsLoaded ? (
    <img src={getAlbumImageUrl(playlistImages, 300)} alt={playlistName} />
  ) : (
    <RiAlbumLine color={colors.neutral7} />
  );
};

PlaylistImage.propTypes = {
  playlistImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  playlistName: PropTypes.string.isRequired,
};

export default function Playlists({
  playlists,
  showDescription,
  showOwner,
  slowAppearanceAnimation,
}) {
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
                    <PlaylistImage
                      playlistImages={playlist.images}
                      playlistName={playlist.name}
                    />
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
