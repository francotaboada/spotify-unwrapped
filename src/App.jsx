import './App.scss';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import TopArtists from './components/topartists/TopArtists';
import TopTracks from './components/toptracks/TopTracks';
import TopGenres from './components/topgenres/TopGenres';
import axios from 'axios';

function App() {


	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_ID; // Your client id
	const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; // Your secret
	const REDIRECT_URI = "http://localhost:3000"
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
	const RESPONSE_TYPE = "token"
	const SCOPE_TYPE = "user-top-read%20user-read-private"
	const USER_ENDPOINT = "https://api.spotify.com/v1/me"

	const TOPTRACKSST_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50"
	const TOPTRACKSMT_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50"
	const TOPTRACKSLT_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50"

	const TOPARTISTSST_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50"
	const TOPARTISTSMT_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50"
	const TOPARTISTSLT_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50"

	const AUDIOFEATURES_ENDPOINT = "https://api.spotify.com/v1/audio-features"

	const [token, setToken] = useState("")
	const [data, setData] = useState([])
	const [isShow, setIsShow] = useState(false);
	const [topGenres, setTopGenres] = useState([])

	const [topArtistsST, setTopArtistsST] = useState([])
	const [topArtistsMT, setTopArtistsMT] = useState([])
	const [topArtistsLT, setTopArtistsLT] = useState([])

	const [topTracksST, setTopTracksST] = useState([])
	const [topTracksMT, setTopTracksMT] = useState([])
	const [topTracksLT, setTopTracksLT] = useState([])
	
	const [audioFeatures, setAudioFeatures] = useState([])

	const [genreRemainder, setGenreRemainder] = useState("")

	window.onbeforeunload = function () {
		localStorage.clear();
	}

	useEffect(() => {
		const hash = window.location.hash
		let token = window.localStorage.getItem("token")
		if (!token && hash) {
			token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

			window.location.hash = ""
			window.localStorage.setItem("token", token)
		}

		setToken(token)
	}, [])

	const getSpotifyData = () => {
		axios
			.all([
				axios
					.get(USER_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPARTISTSST_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPARTISTSMT_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPARTISTSLT_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPTRACKSST_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPTRACKSMT_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
				axios
					.get(TOPTRACKSLT_ENDPOINT, {
						headers: {
							Authorization: "Bearer " + token,
						}
					}),
			])
			.then(axios.spread((responseUser, responseArtistsST, responseArtistsMT, responseArtistsLT, responseTracksST, responseTracksMT, responseTracksLT) => {
				setData(responseUser.data)
				setTopArtistsST(responseArtistsST.data.items)
				setTopArtistsMT(responseArtistsMT.data.items)
				setTopArtistsLT(responseArtistsLT.data.items)
				setTopTracksST(responseTracksST.data.items)
				setTopTracksMT(responseTracksMT.data.items)
				setTopTracksLT(responseTracksLT.data.items)
				getTopGenres(responseArtistsST.data.items, responseArtistsMT.data.items, responseArtistsLT.data.items)
				setIsShow(true)
			}))
			.catch((error) => {
				console.log(error);
			});
	}

	const logout = () => {
		setToken("")
		window.localStorage.removeItem("token")
		setIsShow(false)
	}

	const getTopGenres = (artistsST, artistsMT, artistsLT) => {
		let topGenres = [];
		console.log(artistsST);
		console.log(artistsST.length);
		for (let i = 0; i < artistsST.length; i++) {
			for (let j = 0; j < artistsST[i].genres.length; j++) {
				topGenres.push(artistsST[i].genres[j]);
			}
		}
		for (let i = 0; i < artistsMT.length; i++) {
			for (let j = 0; j < artistsMT[i].genres.length; j++) {
				topGenres.push(artistsMT[i].genres[j]);
			}
		}
		for (let i = 0; i < artistsLT.length; i++) {
			for (let j = 0; j < artistsLT[i].genres.length; j++) {
				topGenres.push(artistsLT[i].genres[j]);
			}
		}

		let result = {};
		for (let i = 0; i < topGenres.length; i++) {
			if (!result[topGenres[i]])
				result[topGenres[i]] = 0;
			++result[topGenres[i]];
		}
		console.log(result);

		let keys = Object.keys(result);
		let values = Object.values(result);

		console.log(keys);
		console.log(values);

		keys.sort(function (a, b) { return result[b] - result[a] });
		values.sort(function (a, b) { return b - a; });

		console.log(keys);
		console.log(values);


		let percentages = [];
		let totalGenres = 0;

		for (let i = 0; i < 10; i++) {
			totalGenres += values[i];
		}

		for (let i = 0; i < 10; i++) {
			let retVal = (Math.round(((values[i] / totalGenres).toFixed(4)) * 100) + "%");
			percentages.push(retVal);
		}

		let remainder = 0;
		for (let i = 0; i < 9; i++) {
			remainder += (Math.round(((values[i] / totalGenres).toFixed(4)) * 100));
		}
		remainder = 100-remainder;
		setGenreRemainder(remainder + "%");

		var genreData = {};

		for (let i = 0; i < keys.length; i++) {
			genreData[keys[i]] = percentages[i];
		}
		setTopGenres(genreData);

	}

	return (
		<div className="App">
			{!isShow ? <div className='login'>
				<h1>Spotify Unwrapped</h1>
				{!token ?
					<div className = "button-container">
						<a className='button' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE_TYPE}`}>Login
						to Spotify</a>
					</div>
					
					: <div className='button-container'>
						<div>
							<button className='button' onClick={getSpotifyData} hidden={isShow}>Calculate Stats</button>
						</div>
						<div>
							<button className='button' onClick={logout}>Logout</button>
						</div>
					</div>}
			</div> : <div />}
			{!token ? <div /> : <Navbar onClick={logout} />}
			{!isShow ?
				<div /> :
				<div className="sections">
					<Intro userData={data} />
					<TopArtists topArtistsST={topArtistsST} topArtistsMT={topArtistsMT} topArtistsLT={topArtistsLT} />
					<TopTracks topTracksST={topTracksST} topTracksMT={topTracksMT} topTracksLT={topTracksLT}/>
					<TopGenres genres={topGenres} genreRemainder = {genreRemainder} />
				</div>
			}


		</div>
	);
}

export default App;