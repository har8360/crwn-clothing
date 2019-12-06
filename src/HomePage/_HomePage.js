import React from 'react';
import HomePageContainer from './HomePageContainer';
import ItemsDirectoryContainer from './ItemsDirectoryContainer';
import HatsComponent from './HatsComponent/_Hats.component';
import JacketsComponent from './JacketsComponent/_Jackets.component';
import SneakersComponent from './SneakersComponent/_Sneakers.component';
import WomensComponent from './WomensComponent/_Womens.component';
import MensComponent from './MensComponent/_Mens.component';

const HomePage = () => {

    return (
        <HomePageContainer>
            <ItemsDirectoryContainer>
                <HatsComponent/>
                <JacketsComponent/>
                <SneakersComponent/>
                <WomensComponent/>
                <MensComponent/>
            </ItemsDirectoryContainer>
        </HomePageContainer>  
    );
};

export default HomePage;