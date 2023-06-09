import React from 'react';
import Banner from '../Banner';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* nav */}
      <Nav />

      {/* banner */}
      <Banner />
      {/* rows */}

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
