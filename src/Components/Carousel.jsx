import React from 'react'
import image2 from "../Images/gold.jpg"
import image5 from "../Images/pexels-quang-viet-nguyen-107013384-13257109.jpg"
import image6 from "../Images/pexels-castorlystock-3829442.jpg"
import image7 from "../Images/pexels-gullywabbit-3638006-7749381.jpg"
import image8 from "../Images/pexels-pixabay-280250.jpg"
import image3 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import { useNavigate } from 'react-router-dom';

import image4 from "../Images/mech.jpg"
import image11 from "../Images/star.jpg"


export default function Carousel() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/productpage');
    };


    return (
        <div>
            <div className="container px-5 text-center">
                <h2 className="sm:text-3xl text-2xl mt-14 font-semibold title-font text-gray-900">
                ← Slide Through our Best Seller →
                </h2>
            </div>

            <div className="carousel carousel-center bg-white rounded-box max-w-screen-2xl space-x-4  md:p-8 lg:p-10 md:m-10 lg:m-20 ">

                <div className="carousel-item">
                    <img
                        src={image8}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 1"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image2}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 2"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image3}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 3"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image4}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 4"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image5}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 5"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image6}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 6"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={image7}
                        className="rounded-box object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                        alt="Image 7"
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    );
}
