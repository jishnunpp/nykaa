import React from 'react';
import body from '../../assets/body.avif';

import './body.css';
import Carosuel_card from '../../components/carousel_card/Carosuel_card';
import Header from '../header/Header';
import Card from '../../components/Brand_card/Card';
import Supplemets from '../../components/suppliments/Supplemets';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';

const Body = () => {
  return (
    <div className="body">
      <Header />
      {/* <Profile/> */}
      <div className="body-content">
        <Carosuel_card />
        <Card />
        <Supplemets />
      </div>

      <Footer />

      <div></div>
    </div>
  );
};

export default Body;
