import './App.css';
import Row from './row_components/Row';
import Banner from './banner_components/Banner';
import requests from "./API/requests"
import Navbar from './navbar_components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Row title='Netflix Original' isLarge={true} fetchUrl={requests.fetchNetflixOriginal} />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentary Movies' fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
