import React from 'react'
import { AdditonalTypo, DisplayDiv, IconCustomer, IconShipping, IconStyle, IconWarrenty, MainDiv, ParaTypo, SubDiv } from './DetailsQuality.styled'

const DetailsQuality = () => {
    return (
        <MainDiv>
            <DisplayDiv className='body-gap'>
                <SubDiv>
                    <div>
                       <IconStyle />
                    </div>
                    <div>
                        <ParaTypo>High Quality</ParaTypo>
                        <AdditonalTypo>crafted from top materials</AdditonalTypo>
                    </div>
                </SubDiv>
                <SubDiv>
                    <div>
                        <IconWarrenty />
                    </div>
                    <div>
                        <ParaTypo>Warranty Protection</ParaTypo>
                        <AdditonalTypo>Over 2 years</AdditonalTypo>
                    </div>
                </SubDiv>
                <SubDiv>
                    <div>
                       <IconShipping />
                    </div>
                    <div>
                        <ParaTypo>Free Shipping</ParaTypo>
                        <AdditonalTypo>Order over Rs.150</AdditonalTypo>
                    </div>
                </SubDiv>
                <SubDiv>
                    <div>
                        <IconCustomer />
                    </div>
                    <div>
                        <ParaTypo>24 / 7 Support</ParaTypo>
                        <AdditonalTypo>Dedicated support</AdditonalTypo>
                    </div>
                </SubDiv>
            </DisplayDiv>
        </MainDiv>
    )
}

export default DetailsQuality
