<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# LASTFM Plugin

<sub>This README is auto-generated and will be updated with the latest plugin options and supported sections.</sub>


<!-- Summary -->

## 📝 Contents

- [Available options](#-available-options)
- [Supported sections](#-supported-sections)

<!-- Plugin options -->

### ➡️ Available options

<table>
  <tr>
    <td align="center" nowrap="nowrap"><b>Variable</b></td>
    <td align="center" nowrap="nowrap"><b>Description</b></td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>PLUGIN_LASTFM <span style='color: red;'>*</span>    <td rowspan="2">
      <p>Enable LastFM plugin</p>
      <p><b>Example:</b></p>
      <code>PLUGIN_LASTFM=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_USERNAME <span style='color: red;'>*</span>    <td rowspan="2">
      <p>LastFM username</p>
      <p><b>Example:</b></p>
      <code>LASTFM_USERNAME="value"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_SECTIONS    <td rowspan="2">
      <p>Sections to display in the profile</p>
      <b>Available sections:</b>
      <code>recent_tracks</code>, <code>statistics</code>, <code>top_artists_grid</code>, <code>top_artists_list</code>, <code>top_artists_default</code>, <code>top_albums_list</code>, <code>top_albums_grid</code>, <code>top_albums_default</code>, <code>top_tracks_list</code>, <code>top_tracks_grid</code>, <code>top_tracks_default</code>
      <p><b>Example:</b></p>
      <code>LASTFM_SECTIONS="top_tracks"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>stringArray</code>

<b>default:</b> top_tracks, recent_tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_HIDE_HEADER    <td rowspan="2">
      <p>Hide the header of the profile</p>
      <p><b>Example:</b></p>
      <code>LASTFM_HIDE_HEADER=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_HIDE_INTERVALS    <td rowspan="2">
      <p>Hide the intervals of the profile</p>
      <p><b>Example:</b></p>
      <code>LASTFM_HIDE_INTERVALS=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the recent tracks section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_RECENT_TRACKS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_MAX    <td rowspan="2">
      <p>Number of recent tracks to display</p>
      <p><b>Example:</b></p>
      <code>LASTFM_RECENT_TRACKS_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top artists section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ARTISTS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_MAX    <td rowspan="2">
      <p>Number of top artists to display</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ARTISTS_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top albums section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ALBUMS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_MAX    <td rowspan="2">
      <p>Number of top albums to display</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ALBUMS_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top tracks section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_TRACKS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_MAX    <td rowspan="2">
      <p>Number of top tracks to display</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_TRACKS_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_STATISTICS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the statistics section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_STATISTICS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_TITLE    <td rowspan="2">
      <p>Title of the top tracks section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_TRACKS_TITLE="Top Tracks"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Top Tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_TITLE    <td rowspan="2">
      <p>Title of the top artists section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ARTISTS_TITLE="Top Artists"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Top Artists    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_TITLE    <td rowspan="2">
      <p>Title of the top albums section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_TOP_ALBUMS_TITLE="Top Albums"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Top Albums    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_TITLE    <td rowspan="2">
      <p>Title of the recent tracks section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_RECENT_TRACKS_TITLE="Recent Tracks"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Recent Tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_STATISTICS_TITLE    <td rowspan="2">
      <p>Title of the statistics section</p>
      <p><b>Example:</b></p>
      <code>LASTFM_STATISTICS_TITLE="Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Statistics    </td>
  </tr>
</table>

<!-- Supported sections -->

## 🖼️ Supported sections

<h4><b>LASTFM</b> has 11 sections with 2 styles each.</h4>

<p>Here are the available sections and their respective images:</p>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>recent_tracks</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/recent_tracks.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_artists_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_artists_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_artists_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_albums_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_albums_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_albums_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_tracks_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_tracks_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/top_tracks_default.svg"></td>
  </tr>
</table>

# <p><b>Terminal Style:</b></p>

<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" width="600px" nowrap="nowrap">Terminal Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>recent_tracks</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/recent_tracks.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_artists_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_artists_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_artists_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_albums_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_albums_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_albums_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_tracks_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_tracks_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/top_tracks_default.svg"></td>
  </tr>
</table>
