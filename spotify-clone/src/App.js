// React Components
import React, {useEffect, useState} from 'react';

// Spotify API
import SpotifyWebAPI from 'spotify-web-api-js';

// Made Components
import Login from './Login'
import Player from './Player'
import {useDataLayerValue} from './DataLayer'
import {getTokenFromUrl} from './spotify'

//CSS
import './App.css';

const spotify = new SpotifyWebAPI();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // TOKEN
      spotify.setAccessToken(_token);
      // USER
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      // PLAYLIST
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('6kyuaiw7XM8KtWzBrn08GR').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      })
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }  
    </div>
  );
}

export default App;