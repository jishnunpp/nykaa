import React from 'react';
import './wishlist.css';
import Header from '../../../container/header/Header';
import Footer from '../../../container/footer/Footer'

const Wishlist = () => {
  return (
    <div >
    <div className="wishlist-bigscreen">
      <div className="wishlist-heading">
        <h2>
          My Wishlist<span className="wishlist-count">(4)</span>
        </h2>
      </div>
      <div className="wishlist_card-section">
        {CardData.map((d) => (
          <div className="wishlist_card">
            <div className="wishlist_image_card">
              <img src={d.img} alt={d.offer} />
            </div>
            <div className="wishlist_card-text">
              <h2>{d.offer}</h2>
              <p>{d.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
<div  className="wishlist-small-device">
      <Header/>
      <div className="wishlist">
    <div className="wishlist-smallscreen">
      <div className="wishlist-smallscreen-heading">
        <h2>
          My Wishlist<span className="wishlist-count">(4)</span>
        </h2>
      </div>
      <div className="wishlist-smallscreen-card-section">
        {CardData.map((d) => (
          <div className="wishlist-smallscreen_card">
            <div className="wishlist-smallscreen_image_card">
              <img src={d.img} alt={d.offer} />
            </div>
            <div className="wishlist-smallscreen_card-text">
              <h2>{d.offer}</h2>
              <p>{d.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
      <Footer/>
    </div>

    </div>
  );
};

export default Wishlist;

const CardData = [
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/bespoke-blue_1.jpg",
    offer: 'Upto 50% Off+',
    text: 'Win Existing Prices!',
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4da1f6KAYBE00000049_01.jpg",
    offer: 'Flat 5% Off ',
    text: 'On Entire Range',
  },
 
  {
    img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9098e7KAYBE00000335_1.jpg",
    offer: 'Upto 30% Off ',
    text: 'Gift On Purchase',
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/4/24c0a0a12685_H-8901030764844.jpg" ,
    offer: 'Upto 30% Off ',
    text: 'Gift On Purchase',
  },
];
