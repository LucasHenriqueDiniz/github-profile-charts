interface LastFmTrack {
  track: string;
  artist: string;
  date: string;
  image: string | undefined;
}

interface LastFmArtist {
  artist: string;
  image: string | undefined;
  totalPlays: string;
}

interface LastFmAlbum {
  album: string;
  artist: string;
  plays: string;
  image: string | undefined;
}

interface LastFmFeaturedTrack {
  track: string;
  artist: string;
  image: string | undefined;
}

interface TopTrack {
  track: string;
  artist: string;
  plays: string;
  image: string | undefined;
}

interface LastFmData {
  totalScrobbles: string;
  totalArtists: string;
  lovedTracks: string;
  recentTracks: LastFmTrack[];
  topArtists: LastFmArtist[];
  topAlbums: LastFmAlbum[];
  topTracks: TopTrack[];
  featuredTrack: LastFmFeaturedTrack | null;
}

interface LastFmResponse {
  data: LastFmData;
  topArtistsInterval?: string;
  topAlbumsInterval?: string;
  topTracksInterval?: string;
}

export { LastFmData, LastFmTrack, LastFmArtist, LastFmAlbum, LastFmFeaturedTrack, TopTrack, LastFmResponse };
