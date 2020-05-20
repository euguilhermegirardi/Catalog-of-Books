import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html,
body,
#root {
  min-height: 100%; /* To use all the background, all the screen. */
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  background-color: #e0e0e0;
}

body {
  -webkit-font-smoothing: antialiased !important;
}
`;
