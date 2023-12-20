import React from 'react';
import MainNavigation from '../components/utilities/main_navigation';
import Banner from '../components/banner_home';
import TopPicked from '../components/top_picked_services';
import TopServices from '../components/top_services';

const Home = () => {
  return (
    <div>
        <MainNavigation />
        <Banner />
        {/* <TopPicked /> */}
        <TopServices />
    </div>
  )
}

export default Home