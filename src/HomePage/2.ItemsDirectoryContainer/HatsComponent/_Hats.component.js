import React from 'react';
import HatsImageContainer from './1_HatsImageContainer.styles';
import HatsContentContainer from './2_HatsContentContainer.styles';
import HatsTitle from './3_HatsTitle.styles';
import HatsSubtittle from './4_HatsSubtittle.styles';

const HatsComponent =() => {
    
    return (
        <HatsImageContainer>
            <HatsContentContainer>
                <HatsTitle>HATS</HatsTitle>
                <HatsSubtittle>SHOP NOW</HatsSubtittle>                
            </HatsContentContainer>
        </HatsImageContainer>
    );
};

export default HatsComponent;