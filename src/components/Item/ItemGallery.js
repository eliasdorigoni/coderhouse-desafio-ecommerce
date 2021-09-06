import React from "react";
import Slider from "react-slick";
import "../../Slick.css";

const ItemGallery = ({pictures}) => {
    const settings = {
        autoplay: true,
        dots: true,
        draggable: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="mb-12">
            <Slider {...settings}>
                {pictures.map((picture, index) =>
                    <div key={picture}>
                        <img src={picture} alt={"Imagen #" + (index+1)} />
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default ItemGallery
