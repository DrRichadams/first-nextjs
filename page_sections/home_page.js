import React from 'react';
import MainNavigation from '../components/utilities/main_navigation';
import Banner from '../components/banner_home';
import TopPicked from '../components/top_picked_services';

const Home = () => {
  return (
    <div>
        <MainNavigation />
        <Banner />
        <TopPicked />
    </div>
  )
}

export default Home