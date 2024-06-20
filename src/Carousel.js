import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./slider.css";
import ama1 from "./img/ama1.jpg";
import ama2 from "./img/ama2.jpg";
import ama3 from "./img/ama3.jpg";
import ama4 from "./img/ama4.jpg";

const data = [
    {
        name: `MOMITTLE Baby Nail Trimmer New Born with Lights`,
        img: ama1,
        price: `₹345`,
        stars: 4.2,
        link: `https://www.amazon.in/dp/B0CRPMWWMP?&linkCode=ll1&tag=genaigifts05-21&linkId=834469d9117bd176925422d798d40b92&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Hopscotch Girls Cotton All-Over Print`,
        img: ama2,
        price: ``,
        stars: 4.3,
        link: `https://www.amazon.in/dp/B0CRZ2ZSMQ?&linkCode=ll1&tag=genaigifts05-21&linkId=efb11e127f18131c75decfd99581bdbf&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Himalaya Powder For Baby`,
        img: ama3,
        price: `₹328`,
        stars: 4.4,
        link: `https://www.amazon.in/dp/B07PSJW32L?linkCode=ll1&tag=genaigifts05-21&linkId=88e1674c0940d60eaf67a9a47acb0979&language=en_IN&ref_=as_li_ss_tl&th=1`
    },
    {
        name: `Himalaya Gentle Baby Soap Value Pack`,
        img:ama4,
        price: `₹180`,
        stars: 4.4,
        link: `https://www.amazon.in/dp/B00ZTSOJSM?th=1&linkCode=ll1&tag=genaigifts05-21&linkId=c46a6609468ec2787265bacd0d89e753&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Himalaya Powder For Baby`,
        img: ama3,
        price: `₹328`,
        stars: 4.4,
        link: `https://www.amazon.in/dp/B07PSJW32L?linkCode=ll1&tag=genaigifts05-21&linkId=88e1674c0940d60eaf67a9a47acb0979&language=en_IN&ref_=as_li_ss_tl&th=1`
    },
    {
        name: `MOMITTLE Baby Nail Trimmer New Born with Lights`,
        img: ama1,
        price: `₹345`,
        stars: 4.2,
        link: `https://www.amazon.in/dp/B0CRPMWWMP?&linkCode=ll1&tag=genaigifts05-21&linkId=834469d9117bd176925422d798d40b92&language=en_IN&ref_=as_li_ss_tl`
    }
];

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="text-left font-bold text-5xl mb-10">Generic Gift Ideas on Baby Products for Age 0 - 6 Months</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider-item">
                            <div className="slider-image">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="slider-content">
                                <h3 className="slider-title">{item.name}</h3>
                                <p className="slider-price">{item.price}</p>
                                <p className="slider-rating">
                                    Rating: {[...Array(Math.round(item.stars))].map((_, i) => (
                                        <span key={i} className="text-yellow-500">&#9733;</span>
                                    ))}
                                </p>
                                <a href={item.link} className="slider-link">View on Amazon</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
