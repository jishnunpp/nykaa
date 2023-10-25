import React from "react";
import "./carousel_card.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carosuel_card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };
  return (
    <div  className="carosuel-section"> 
    <div className="carousel">
      <div className="carousel-container">
        <Slider {...settings}>
          {data.map((d) => (
            
              <div className="image_carousel">
                <img src={d.img} alt={d.offer} />
                <div className="image_card-text">
                <h2>{d.offer}</h2>
                <p>{d.text}</p>
                </div>
                
              </div>
           
          ))}
        </Slider>
      </div>
    </div>
    <div className='carousel_bottom-images'>
      <div className="bottom-images">
      
        <img src="https://images-static.nykaa.com/uploads/c1945274-ed2c-4c7e-b973-e9acffc47f88.jpg?tr=w-600,cm-pad_resize" alt="skin-primary-focus" loading="eager" srcset="https://images-static.nykaa.com/uploads/c1945274-ed2c-4c7e-b973-e9acffc47f88.jpg?tr=w-1200,cm-pad_resize 2x"/>
     
      </div>
      <div  className="bottom-images">
   
        <img src="https://images-static.nykaa.com/uploads/c97b5ef0-1384-46da-8d74-cf581e9574fb.jpg?tr=w-600,cm-pad_resize" alt="fragrance-primary-focus" loading="eager" srcset="https://images-static.nykaa.com/uploads/c97b5ef0-1384-46da-8d74-cf581e9574fb.jpg?tr=w-1200,cm-pad_resize 2x"/>
     
      </div>
    </div>




    </div>
  );
};

export default Carosuel_card;

const data = [
  {
    img: 'https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-1200,cm-pad_resize 2x',
    offer: "Festive Glow-Up Essentials",
    text: "Shop Now!",
  },
  {
    img: 'https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-1200,cm-pad_resize 2x',
    offer: "Upto 20% Off ",
    text: "On Bodycare Essentials",
  },
  {
    img: 'https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-1200,cm-pad_resize 2x',
    offer: "Upto 20% Off ",
    text: "On Luxe Fragrance",
  },
  {
    img: 'https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-600,cm-pad_resize" alt="204" loading="eager" srcset="https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-1200,cm-pad_resize 2x',
    offer: "Upto 50% Off ",
    text: "Win Existing Prices",
  },
  {
    img: 'https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-600,cm-pad_resize" alt="7666" loading="eager" srcset="https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-1200,cm-pad_resize 2x',
    offer: "Upto 50% Off ",
    text: "Win Existing Prices",
  },
];
