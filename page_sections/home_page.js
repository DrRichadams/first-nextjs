import React from 'react';
import MainNavigation from '../components/utilities/main_navigation';
import Banner from '../components/banner_home';
import TopPicked from '../components/top_picked_services';
import TopServices from '../components/top_services';
import Faq from '../components/faq';

const Home = () => {
  return (
    <div>
        <MainNavigation />
        <Banner />
        {/* <TopPicked /> */}
        <TopServices />
        <Faq />
    </div>
  )
}

export default Home