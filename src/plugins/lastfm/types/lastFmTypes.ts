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

interface LastFmResponse {
  [key: string]: any;
  totalScrobbles: string;
  totalArtists: string;
  lovedTracks: string;
  recentTracks: LastFmTrack[];
  topArtists: LastFmArtist[];
  topAlbums: LastFmAlbum[];
  topTracks: TopTrack[];
  featuredTrack: LastFmFeaturedTrack | null;
}

interface LastFmData {
  data: LastFmResponse;
  topArtistsInterval?: string;
  topAlbumsInterval?: string;
  topTracksInterval?: string;
}

export type { LastFmAlbum, LastFmArtist, LastFmData, LastFmFeaturedTrack, LastFmResponse, LastFmTrack, TopTrack };
