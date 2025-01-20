import React from "react";
import classes from "./testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = (props) => {
    const pagination = {
        clickable: true,
    };
    return (
        <section id="testimonials">
            <h5>Review from project</h5>
            <h2>project review</h2>
            <div className={`container ${classes["testimonials__container"]}`}>
                <Swiper
                    pagination={pagination}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {props.data.map((item, i) => {
                        return (
                            <SwiperSlide className={classes.testimonial} key={item.id}>
                                <div className={classes.project__IMG}>
                                    <img src={item.project} alt="project" />
                                </div>
                                <h5 className={classes.project__name}>{item.title}</h5>
                                <small className={classes.project__review}>{item.review}</small>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
