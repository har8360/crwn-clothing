import React from 'react';
import WomensImageContainer from './1_WomensImageContainer.styles';
import WomensContentContainer from './2_WomensContentContainer.styles';
import WomensTitle from './3_WomensTitle.styles';
import WomensSubtittle from './4_WomensSubtittle.styles';

const WomensComponent =() => {
    return (
        <WomensImageContainer>
            <WomensContentContainer>
                <WomensTitle>WOMENS</WomensTitle>
                <WomensSubtittle>SHOP NOW</WomensSubtittle>                
            </WomensContentContainer>
        </WomensImageContainer>
    );
};

export default WomensComponent;