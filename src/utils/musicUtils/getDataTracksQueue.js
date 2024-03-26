import { get } from 'lodash';

import getAlbumImageUrl from './getAlbumImageUrl';

export default (tracks, trackIndex) => {
  const queueTracks = [];

  tracks.forEach((track, i) => {
    if (i <= trackIndex) return;
    if (get(track, 'preview_url', '')) {
      queueTracks.push({
        previewUrl: get(track, 'preview_url', ''),
        trackImg: getAlbumImageUrl(get(track, 'album.images', ''), 300),
        trackTitle: get(track, 'name', ''),
        trackArtists: get(track, 'artists', ''),
      });
    }
  });

  return queueTracks;
};

/* currentPreviewMusic: '',
  currentTrackImg: '',
  currentTrackTitle: '',
  currentTrackArtists: [], */
