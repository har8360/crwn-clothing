import React from 'react';
import JacketsImageContainer from './1_JacketsImageContainer.styles';
import JacketsContentContainer from './2_JacketsContentContainer.styles';
import JacketsTitle from './3_JacketsTitle.styles';
import JacketsSubtittle from './4_JacketsSubtittle.styles';

const JacketsComponent =() => {
    return (
        <JacketsImageContainer>
            <JacketsContentContainer>
                <JacketsTitle>JACKETS</JacketsTitle>
                <JacketsSubtittle>SHOP NOW</JacketsSubtittle>                
            </JacketsContentContainer>
        </JacketsImageContainer>
    );
};
export default JacketsComponent;