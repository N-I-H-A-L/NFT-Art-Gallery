import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/card';
import './Home.css';

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  );
}

export default Home;
