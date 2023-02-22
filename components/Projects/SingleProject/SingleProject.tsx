import React, { FC, useRef } from 'react';
import css from "./SingleProject.module.scss";
import Slider from "react-slick";

//hooks
import useWindowSize from '@/hooks/useWindowSize';

//assets
import ArrowLeft from "svg/arrow_left.svg";
import ArrowRight from "svg/arrow_right.svg";

//types
import { SingleProjectProps } from '@/types/projects';

const SingleProject: FC<SingleProjectProps> = ({ item }) => {

    const windowSize = useWindowSize();
    const sliderRef = useRef() as any;

    const isMobile = windowSize && windowSize < 768;

    const RenderArrowRight = () => {
        return (
            <div onClick={(e) => {
                sliderRef.current.slickNext();
                e.stopPropagation();
            }}
                className={css.ArrowRight}
            >
                <ArrowRight />
            </div>
        );
    };

    const RenderArrowLeft = () => {
        return (
            <div onClick={(e) => {
                sliderRef.current.slickPrev();
                e.stopPropagation();
            }}
                className={css.ArrowLeft}
            >
                <ArrowLeft />
            </div>
        );
    };

    const slickSettings: any = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        adaptiveHeight: true,
        nextArrow: !isMobile && <RenderArrowRight />,
        prevArrow: !isMobile && <RenderArrowLeft />,
        swipe: isMobile ? true : false,
        className: css.slider,
    };

    return (
        <div className={css.container} onClick={(e) => e.stopPropagation()}>
            <Slider ref={sliderRef} {...slickSettings}>
                <img src={item.src} alt={item.name} />
                <img src={item.src} alt={item.name} />
                <img src={item.src} alt={item.name} />
            </Slider>
        </div>
    )
}

export default SingleProject;