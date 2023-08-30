# Spotify Unwrapped

Using a web app developed in ReactJS to display the short-term, medium-term, and long-term artists, tracks, and genres.

## Project Setup
### Spotify API Documentation
https://developer.spotify.com/documentation/web-api
### ReactJS Documentation
https://react.dev/reference/react
### Amplify Documentation
https://docs.aws.amazon.com/amplify/

## Technology Stack

### Technology Used
![My Skills](https://skillicons.dev/icons?i=react) <img src="https://github.com/francotaboada/spotify-unwrapped/assets/18605940/69a03c62-1fc7-43b7-9534-8880563bbf10" alt="amplify" width="48px" height="48px">
- ReactJS for UI
- AWS Amplify for deployment: deployed directly from the GitHub repository.

### Languages Used
![My Skills](https://skillicons.dev/icons?i=js,html,sass,css)
- JavaScript
- HTML
- SASS/CSS

## CSS Features
While developing this web app, I looked into different styling used for web apps and picked out the most interesting ones that I have included in this project to showcase below.
### Responsiveness for mobile phones and tablets
Using breakpoints.scss in /src/breakpoints/ (Source: https://eduardoboucas.github.io/include-media/#download), if a user resizes the window or uses a device with a smaller resolution the content of the components changes depending on the size. 
![responsiveness](https://github.com/francotaboada/spotify-unwrapped/assets/18605940/cdbf11fe-2c85-45cc-abf4-3f919b147870)
> Different window sizes show different outputs for content.
### Snap scrolling
Snap scrolling locks to each component on the web app which allows all information to be displayed to the user. Users cannot be in between components. I found adding this made the application a lot more user-friendly.

<img src="https://github.com/francotaboada/spotify-unwrapped/assets/18605940/2dac3529-1c31-4810-8097-f6a9c0baa82c" alt="snap scrolling demo" width = "50%">

> Scrolling snaps to each component.

## JavaScript Features
Highlighted below is the JavaScript code that I used to make core features of the Spotify web app.
### Hooks for Music Listening Terms
Tabs can be clicked on to select different terms, such as short (last two weeks), medium (last six months), and long-term (over the last few years), to see listening habits on artists and tracks.

<img src="https://github.com/francotaboada/spotify-unwrapped/assets/18605940/7bb02fd1-7a60-40bb-850a-2d8baf5d5a64" alt="terms demo" width = "50%">

> Each tab changes the data held in hooks to display the correct term of listening.
### Local Storage
Spotify API user key is stored in the browser so users do not have to log in if the page is refreshed or the user has left.

## TODO:
- Release the official version w/o whitelist
- Unique domain name
- Add audio feature component to display user's information
- User key refresh
- More features
