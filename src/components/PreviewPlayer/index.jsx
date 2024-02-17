import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlay, FaStop } from 'react-icons/fa';
import {
  IoVolumeHigh,
  IoVolumeMedium,
  IoVolumeLow,
  IoVolumeOff,
  IoVolumeMute,
} from 'react-icons/io5';

import * as actions from '../../store/modules/musicPlayer/actions';
import getSecondsToMinutes from '../../utils/musicUtils/getSecondsToMinutes';

import { ContainerPlayer } from './styled';

const audioElement = new Audio();
export default function PreviewPlayer() {
  const dispatch = useDispatch();
  const previewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const musicPlaying = useSelector((state) => state.musicPlayer.musicPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const musicControl = async () => {
      if (musicPlaying) {
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
        setDuration(getSecondsToMinutes(audioElement.duration.toFixed(0)));
      } else {
        audioElement.pause();
      }
    };
    musicControl();
  }, [musicPlaying, previewUrl]);

  const handlePlayPause = () => {
    musicPlaying
      ? dispatch(actions.setStopMusic())
      : dispatch(actions.setPlayMusic());
  };

  const handleVolume = (e) => {
    const inputVolume = e.target.value;
    setVolume(Number(inputVolume / 100));
    audioElement.volume = Number(inputVolume / 100);
  };

  return (
    <ContainerPlayer>
      <button className="play-pause-btn" onClick={handlePlayPause}>
        {musicPlaying ? <FaStop /> : <FaPlay />}
      </button>
      <div className="music-slide-back">
        <div className="music-range"></div>
      </div>
      <div className="container-duration-current-time">
        <span>{currentTime ? currentTime : '0:00'}</span> /{' '}
        <span>{duration ? duration : '0:00'}</span>
      </div>
      <div className="container-volume">
        {volume > 0.7 ? <IoVolumeHigh /> : null}
        {volume <= 0.7 && volume >= 0.4 ? <IoVolumeMedium /> : null}
        {volume < 0.4 && volume > 0.05 ? <IoVolumeLow /> : null}
        {volume <= 0.05 && volume >= 0.01 ? <IoVolumeOff /> : null}
        {volume === 0 ? <IoVolumeMute /> : null}
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          onChange={handleVolume}
        />
      </div>
    </ContainerPlayer>
  );
}
