import React from 'react';
import SneakersImageContainer from './1_SneakersImageContainer.styles';
import SneakersContentContainer from './2_SneakersContentContainer.styles';
import SneakersTitle from './3_SneakersTitle.styles';
import SneakersSubtittle from './4_SneakersSubtittle.styles';


const SneakersComponent =() => {
    return (
        <SneakersImageContainer>
            <SneakersContentContainer>
                <SneakersTitle>SNEAKERS</SneakersTitle>
                <SneakersSubtittle>SHOP NOW</SneakersSubtittle>                
            </SneakersContentContainer>
        </SneakersImageContainer>
    );
};

export default SneakersComponent;
