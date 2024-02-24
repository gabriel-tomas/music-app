import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlay, FaStop, FaVolumeUp } from 'react-icons/fa';
import {
  IoVolumeHigh,
  IoVolumeMedium,
  IoVolumeLow,
  IoVolumeOff,
  IoVolumeMute,
} from 'react-icons/io5';

import * as actions from '../../store/modules/musicPlayer/actions';
import * as actionsVolume from '../../store/modules/playerVolume/actions';
import getSecondsToMinutes from '../../utils/musicUtils/getSecondsToMinutes';

import { ContainerPlayer, ContainerCurrentTrackInfo } from './styled';

const audioElement = new Audio();
export default function PreviewPlayer() {
  const dispatch = useDispatch();
  const previewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const trackImg = useSelector((state) => state.currentMusic.currentTrackImg);
  const trackTitle = useSelector(
    (state) => state.currentMusic.currentTrackTitle,
  );
  const trackArtists = useSelector(
    (state) => state.currentMusic.currentTrackArtists,
  );
  const currentStateMusic = useSelector(
    (state) => state.musicPlayer.currentState,
  );
  const userPlatform = useSelector((state) => state.userPlatform.userPlatform);
  const [currentTime, setCurrentTime] = useState(0);
  /* const [volume, setVolume] = useState(0.3); */
  const volume = useSelector((state) => state.playerVolume.playerVolume);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const musicControl = async () => {
      if (!previewUrl.match(/https:|mp3-preview/i)) return;
      if (currentStateMusic === 'playing') {
        if (audioElement.src !== previewUrl) audioElement.src = previewUrl;
        await audioElement.play();
        audioElement.addEventListener('timeupdate', () => {
          document.querySelector('.music-range').style.width = `${
            ((audioElement.currentTime.toFixed(0) + 0.25) /
              audioElement.duration.toFixed(0)) *
            10
          }%`;
          setCurrentTime(
            getSecondsToMinutes(audioElement.currentTime.toFixed(0)),
          );
        });
        audioElement.addEventListener('ended', () => {
          dispatch(actions.setActualMusicState('none'));
        });
        setDuration(getSecondsToMinutes(audioElement.duration.toFixed(0)));
      } else {
        audioElement.pause();
      }
    };
    musicControl();
  }, [currentStateMusic, previewUrl]);

  useEffect(() => {
    audioElement.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    if (currentStateMusic === 'playing') {
      dispatch(actions.setActualMusicState('stopped'));
      return;
    }
    dispatch(actions.setActualMusicState('playing'));
  };

  const handleVolume = (e) => {
    const inputVolume = e.target.value;
    dispatch(actionsVolume.setVolume(Number(inputVolume / 100)));
  };

  return (
    <ContainerPlayer>
      {trackImg && trackTitle && trackArtists && (
        <ContainerCurrentTrackInfo
          className={`track-infos ${(userPlatform === 'Android') | (userPlatform === 'iPhone') && 'mobile'}`}
        >
          <div className="container-img">
            <img src={trackImg} alt={trackTitle} />
          </div>
          <div className="container-right-info">
            <div className="track-title">
              <span>{trackTitle}</span>
            </div>
            <div className="track-artists">
              {trackArtists.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artist/${artist.id}`}
                  className="artist-span"
                >
                  {artist.name}
                </Link>
              ))}
            </div>
          </div>
        </ContainerCurrentTrackInfo>
      )}
      <button
        className={`play-pause-btn ${(userPlatform === 'Android') | (userPlatform === 'iPhone') && 'mobile'}`}
        onClick={handlePlayPause}
      >
        {currentStateMusic === 'playing' ? <FaStop /> : <FaPlay />}
      </button>
      <div className="music-slide-back">
        <div className="music-range"></div>
      </div>
      <div className="container-duration-current-time">
        <span>{currentTime ? currentTime : '0:00'}</span> /{' '}
        <span>{duration ? duration : '0:00'}</span>
      </div>
      {userPlatform === 'PC' && (
        <>
          <button className="btn-volumeup">
            <FaVolumeUp size="18" />
          </button>
          <div className="container-volume">
            {volume > 0.7 ? <IoVolumeHigh size={22} /> : null}
            {volume <= 0.7 && volume >= 0.4 ? <IoVolumeMedium size={22} /> : null}
            {volume < 0.4 && volume > 0.05 ? <IoVolumeLow size={22} /> : null}
            {volume <= 0.05 && volume >= 0.01 ? <IoVolumeOff size={22} /> : null}
            {volume === 0 ? <IoVolumeMute size={22} /> : null}
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="100"
              value={volume * 100}
              onChange={handleVolume}
            />
          </div>
        </>
      )}
    </ContainerPlayer>
  );
}
