import React from 'react';
import MensImageContainer from './1_MensImageContainer.styles';
import MensContentContainer from './2_MensContentContainer.styles';
import MensTitle from './3_MensTitle.styles';
import MensSubtittle from './4_MensSubtittle.styles';

const MensComponent =() => {
    return (
        <MensImageContainer>
            <MensContentContainer>
                <MensTitle>MENS</MensTitle>
                <MensSubtittle>SHOP NOW</MensSubtittle>                
            </MensContentContainer>
        </MensImageContainer>
    );
};

export default MensComponent;