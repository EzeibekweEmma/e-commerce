"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import images from "./BannerImages";

const Banner = () => {
    return (
        <section className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                interval={3500}
            >
                {images.map((image) => {
                    return (
                        <div key={image.alt}>
                            <Image
                                priority
                                src={image.url}
                                alt={image.alt}
                                width="1000"
                                height="1000"
                                className="h-[55vh] md:h-[65vh] lg:h-[80vh]"
                            />
                        </div>
                    );
                })}
            </Carousel>
            <div
                className="w-full h-60 bg-gradient-to-t
             from-gray-200 to-transparent absolute bottom-0 z-20"
            />
        </section>
    );
};

export default Banner;