import React from 'react';
import './supplements.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Supplemets = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="supplements">
      <div className="suppliments_offer-image">
        <img
          src="https://images-static.nykaa.com/uploads/0346e07f-494c-45df-ab8f-bf9b8c682df8.jpg?tr=w-1200,cm-pad_resize"
          alt="prebuzz-strip"
          loading="eager"
          srcset="https://images-static.nykaa.com/uploads/0346e07f-494c-45df-ab8f-bf9b8c682df8.jpg?tr=w-2400,cm-pad_resize 2x"
        />
      </div>
      <div className="suppliments-banner">
        <div className="suppliments_banner-text">
          <p>Explore Glow Giving Supplements</p>
        </div>
        <div className="suppliments_banner-image">
          <img
            src="https://images-static.nykaa.com/uploads/5aa7503e-9be8-4b33-96fe-0d7bd15a9ffb.gif?tr=w-1200,cm-pad_resize"
            alt="Wellness Mini Takeover 25-10-2023-mbb"
            loading="eager"
            srcset="https://images-static.nykaa.com/uploads/5aa7503e-9be8-4b33-96fe-0d7bd15a9ffb.gif?tr=w-2400,cm-pad_resize 2x"
          />
        </div>
      </div>
      <div className="carousel-supplements">
        <div className="carousel_supplements-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="supplements_carousel">
                <img src={d.img} alt={d.offer} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Supplemets;

const data = [
  {
    img: 'https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'Shop Now!',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'On Bodycare ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'On Luxe ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-600,cm-pad_resize" alt="204" loading="eager" srcset="https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'Win Existing ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-600,cm-pad_resize" alt="7666" loading="eager" srcset="https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-1200,cm-pad_resize 2x',

    text: 'Win Existing ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/eeca38ad-e802-4474-aae1-9acb858488ef/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'On Bodycare ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-600,cm-pad_resize" alt="1742" loading="eager" srcset="https://images-static.nykaa.com/creatives/7886a524-031d-4d67-bad4-28e1a55f1da0/default.jpg?tr=w-1200,cm-pad_resize 2x',

    text: 'On Luxe ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-600,cm-pad_resize" alt="204" loading="eager" srcset="https://images-static.nykaa.com/creatives/d4a9c0e9-c12a-4140-888b-3af4bd361ca4/default.jpg?tr=w-1200,cm-pad_resize 2x',
    offer: 'Upto 50% Off ',
    text: 'Win Existing ',
  },
  {
    img: 'https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-600,cm-pad_resize" alt="7666" loading="eager" srcset="https://images-static.nykaa.com/creatives/e5b8a46c-97f0-4eb3-bf31-eeffef8e9cf0/default.png?tr=w-1200,cm-pad_resize 2x',

    text: 'Win Existing ',
  },
];
