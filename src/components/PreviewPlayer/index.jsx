import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function PreviewPlayer() {
  const previewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const musicPlaying = useSelector((state) => state.musicPlayer.musicPlaying);

  useEffect(() => {
    if (musicPlaying) {
      const audio = document.querySelector('#player');
      audio.play();
    }
  }, [musicPlaying]);

  return <audio controls src={previewUrl} id="player"></audio>;
}
