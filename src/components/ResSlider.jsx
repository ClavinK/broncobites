import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../slider.css';
import carls from '../images/carls.png';
import panda from '../images/panda.jpg';
import saddles from '../images/saddles.jpg';
import subway from '../images/subway.jpg';
import roundtable from '../images/roundtable.png';
import qdoba from '../images/qdoba.png';
import bric from '../images/bricbreak.jpg';
import starbucks from '../images/starbucks.png';
import polly from '../images/polly.png';
import fit from '../images/fitbites.png';
import sushibar from '../images/sushibar.jpg';
import hibachi from '../images/hibachi.jpg';
import element from '../images/element.jpg';
import freshescape from '../images/freshescape.jpg'

import { EffectCoverflow, Navigation, Scrollbar, A11y } from 'swiper/modules';

export default function ResSlider({ onSelectRestaurant }) {

    return (
        <div className="rlist">
            <Swiper
                initialSlide={4}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                navigation={{ clickable: true }}
                modules={[EffectCoverflow, Navigation, Scrollbar, A11y]}
                className="mySwiper"
            >
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(2)}>
                    <img src={carls} alt="Carls Jr" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(1)}>
                    <img src={panda} alt="Panda Express" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(5)}>
                    <img src={saddles} alt="Saddles" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(7)}>
                    <img src={roundtable} alt="Roundtable" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(3)}>
                    <img src={subway} alt="Subway" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(6)}>
                    <img src={qdoba} alt="Qdoba" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(8)}>
                    <img src={bric} alt="BricBreak" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(14)}>
                    <img src={fit} alt="FitBites" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(12)}>
                    <img src={freshescape} alt="Fresh Escape" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(11)}>
                    <img src={polly} alt="Polly" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(13)}>
                    <img src={starbucks} alt="Starbucks" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(9)}>
                    <img src={sushibar} alt="Sushi Bar" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(4)}>
                    <img src={hibachi} alt="Hibachi San" />
                </SwiperSlide>
                <SwiperSlide className="round" onClick={() => onSelectRestaurant(15)}>
                    <img src={element} alt="Element" />
                </SwiperSlide>

            </Swiper>
        </div>
    );

} 
