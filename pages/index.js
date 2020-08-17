import { createGlobalStyle } from 'styled-components';
import Nav from '../components/Nav';
import Mapping from '../components/Mapping';
import Jumbotron from 'react-bootstrap/Jumbotron';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';


const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;


export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        <GlobalStyle />
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector></CountrySelector>
      </div>
      <Mapping />
      <style jsx>{`
  
      `}</style>
    </div>

  );
}
