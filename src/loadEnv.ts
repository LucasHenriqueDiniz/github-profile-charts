import LastFmPlugin from "../types/env/LastFmPluginType";
import MyAnimeListPlugin from "../types/env/MalPluginType";
import splitString from "../utils/splitEnvString";
import toBoolean from "../utils/toBoolean";
import envDefaults from "./envDefaults";

export interface Env {
  gistId: string;
  ghToken: string;
  filename: string;
  storeMethod: string;
  size?: string;
  pluginMal?: MyAnimeListPlugin;
  pluginLastfm?: LastFmPlugin;
  activePlugins: string[];
  customCss?: string;
}

function loadEnv(env: NodeJS.ProcessEnv): Env {
  console.log("LOADING ENV");
  const GIST_ID = env.GIST_ID as string;
  const GH_TOKEN = env.GH_TOKEN as string;

  if (!GIST_ID) {
    throw new Error("Missing GIST_ID");
  }

  if (!GH_TOKEN) {
    throw new Error("Missing GH_TOKEN");
  }

  const filename = (env.FILENAME as string) ?? envDefaults.FILENAME;
  const store_method = (env.STORE_METHOD as string) ?? envDefaults.STORE_METHOD;
  const activePlugins = [] as string[];
  const size = (env.SIZE?.toLowerCase() as string) ?? envDefaults.SIZE;

  if (store_method !== "gist" && store_method !== "repository") {
    throw new Error("Invalid STORE_METHOD: " + store_method);
  }

  if (size !== "half" && size !== "full") {
    throw new Error("Invalid SIZE: " + size);
  }

  const baseEnv = {
    gistId: GIST_ID,
    ghToken: GH_TOKEN,
    filename: filename,
    size: size, // default to  "half" | full [410px] or "full" [820px]
    storeMethod: store_method,
    customCss: env.CUSTOM_CSS,
  };

  function loadPluginMal(): { pluginMal: MyAnimeListPlugin } | null {
    const plugin_mal = toBoolean(process.env.PLUGIN_MAL as string);
    if (!plugin_mal || plugin_mal !== true) {
      return null;
    }

    const plugin_mal_username = process.env.PLUGIN_MAL_USERNAME as string;
    if (!plugin_mal_username) {
      throw new Error("Missing PLUGIN_MAL_USERNAME");
    }

    activePlugins.push("mal");
    const plugin_mal_sections = process.env.PLUGIN_MAL_SECTIONS ?? envDefaults.PLUGIN_MAL_SECTIONS;
    const plugin_mal_style = process.env.PLUGIN_MAL_STYLE ?? envDefaults.PLUGIN_MAL_STYLE;
    const plugin_mal_hide_header = toBoolean(env.PLUGIN_MAL_HIDE_HEADER);

    const plugin_mal_lastupdates_max = parseInt(process.env.PLUGIN_MAL_LASTUPDATES_MAX ?? envDefaults.PLUGIN_MAL_LASTUPDATES_MAX);
    const plugin_mal_lastupdates_hide_title = toBoolean(env.PLUGIN_MAL_LASTUPDATES_HIDE_TITLE);

    const plugin_mal_anime_favorites_max = parseInt(process.env.PLUGIN_MAL_ANIME_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_ANIME_FAVORITES_MAX);
    const plugin_mal_anime_favorites_hide_title = toBoolean(env.PLUGIN_MAL_ANIME_FAVORITES_HIDE_TITLE);

    const plugin_mal_characters_favorites_max = parseInt(process.env.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX);
    const plugin_mal_people_favorites_hide_title = toBoolean(env.PLUGIN_MAL_CHARACTERS_FAVORITES_HIDE_TITLE);

    const plugin_mal_people_favorites_max = parseInt(process.env.PLUGIN_MAL_PEOPLE_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_PEOPLE_FAVORITES_MAX);
    const plugin_mal_manga_favorites_hide_title = toBoolean(env.PLUGIN_MAL_PEOPLE_FAVORITES_HIDE_TITLE);

    const plugin_mal_manga_favorites_max = parseInt(process.env.PLUGIN_MAL_MANGA_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_MANGA_FAVORITES_MAX);
    const plugin_mal_characters_favorites_hide_title = toBoolean(env.PLUGIN_MAL_MANGA_FAVORITES_HIDE_TITLE);

    return {
      pluginMal: {
        username: plugin_mal_username,
        sections: splitString(plugin_mal_sections),
        style: plugin_mal_style,
        hide_header: plugin_mal_hide_header,
        lastupdates_max: plugin_mal_lastupdates_max,
        lastupdates_hide_title: plugin_mal_lastupdates_hide_title,
        anime_favorites_max: plugin_mal_anime_favorites_max,
        anime_favorites_hide_title: plugin_mal_anime_favorites_hide_title,
        characters_favorites_max: plugin_mal_characters_favorites_max,
        characters_favorites_hide_title: plugin_mal_characters_favorites_hide_title,
        people_favorites_max: plugin_mal_people_favorites_max,
        people_favorites_hide_title: plugin_mal_people_favorites_hide_title,
        manga_favorites_max: plugin_mal_manga_favorites_max,
        manga_favorites_hide_title: plugin_mal_manga_favorites_hide_title,
      } as MyAnimeListPlugin,
    };
  }

  function loadPluginLastfm(): { pluginLastfm: LastFmPlugin } | null {
    const plugin_lastfm = toBoolean(process.env.PLUGIN_LASTFM as string);

    if (!plugin_lastfm || plugin_lastfm !== true) {
      return null;
    }

    activePlugins.push("lastfm");
    const plugin_lastfm_username = process.env.PLUGIN_LASTFM_USERNAME as string;

    if (!plugin_lastfm_username) {
      throw new Error("Missing PLUGIN_LASTFM_USERNAME");
    }

    const plugin_lastfm_sections = process.env.PLUGIN_LASTFM_SECTIONS ?? envDefaults.PLUGIN_LASTFM_SECTIONS;
    const plugin_lastfm_style = process.env.PLUGIN_LASTFM_STYLE ?? envDefaults.PLUGIN_LASTFM_STYLE;
    const plugin_lastfm_hide_header = toBoolean(env.PLUGIN_LASTFM_HIDE_HEADER);
    const plugin_lastfm_hide_intervals = toBoolean(env.PLUGIN_LASTFM_SHOW_INTERVALS);

    const plugin_lastfm_recenttracks_hide_title = toBoolean(env.PLUGIN_LASTFM_RECENTTRACKS_HIDE_TITLE);
    const plugin_lastfm_recenttracks_max = parseInt(process.env.PLUGIN_LASTFM_RECENTTRACKS_MAX ?? envDefaults.PLUGIN_LASTFM_RECENTTRACKS_MAX);

    const plugin_lastfm_topartists_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPARTISTS_HIDE_TITLE);
    const plugin_lastfm_topartists_max = parseInt(process.env.PLUGIN_LASTFM_TOPARTISTS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPARTISTS_MAX);

    const plugin_lastfm_topalbums_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPALBUMS_HIDE_TITLE);
    const plugin_lastfm_topalbums_max = parseInt(process.env.PLUGIN_LASTFM_TOPALBUMS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPALBUMS_MAX);

    const plugin_lastfm_toptracks_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPTRACKS_HIDE_TITLE);
    const plugin_lastfm_toptracks_max = parseInt(process.env.PLUGIN_LASTFM_TOPTRACKS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPTRACKS_MAX);

    const plugin_lastfm_statistics_hide_title = toBoolean(env.PLUGIN_LASTFM_STATISTICS_HIDE_TITLE);

    return {
      pluginLastfm: {
        username: plugin_lastfm_username,
        sections: splitString(plugin_lastfm_sections),
        style: plugin_lastfm_style,
        hide_header: plugin_lastfm_hide_header,
        hide_intervals: plugin_lastfm_hide_intervals,

        statistics_hide_title: plugin_lastfm_statistics_hide_title,

        recent_tracks_hide_title: plugin_lastfm_recenttracks_hide_title,
        recent_tracks_max: plugin_lastfm_recenttracks_max,

        top_artists_max: plugin_lastfm_topartists_max,
        top_artists_hide_title: plugin_lastfm_topartists_hide_title,

        top_albums_max: plugin_lastfm_topalbums_max,
        top_albums_hide_title: plugin_lastfm_topalbums_hide_title,

        top_tracks_max: plugin_lastfm_toptracks_max,
        top_tracks_hide_title: plugin_lastfm_toptracks_hide_title,
      },
    };
  }

  console.log("LOADED ENV");
  return {
    ...baseEnv,
    ...loadPluginMal(),
    ...loadPluginLastfm(),
    activePlugins: activePlugins,
  };
}

export default loadEnv;
