import React from 'react';
import HomePageContainer from './1.HomePageContainer/HomePageContainer.styles';
import ItemsDirectoryContainer from './2.ItemsDirectoryContainer/ItemsDirectoryContainer.styles';
import HatsComponent from './2.ItemsDirectoryContainer/HatsComponent/_Hats.component';
import JacketsComponent from './2.ItemsDirectoryContainer/JacketsComponent/_Jackets.component';
import SneakersComponent from './2.ItemsDirectoryContainer/SneakersComponent/_Sneakers.component';
import WomensComponent from './2.ItemsDirectoryContainer/WomensComponent/_Womens.component';
import MensComponent from './2.ItemsDirectoryContainer/MensComponent/_Mens.component';

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