import React from 'react';

import Allthecards from './Cards/Allthecards';
import Slide from './HomeCarousel/Carousel';
import HomeNav from './HomeNav/HomeNav';
import Navdwon from './HomeNav/Navdwon';

function Home(props) {
    return (
        <div>
            <HomeNav/>
            <Navdwon/>
            <Slide/>
            
            <Allthecards/>
            
        </div>
    );
}

export default Home;