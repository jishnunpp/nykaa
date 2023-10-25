import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="main_card">
        <div className="card-heading">
         <h2> Explore Our Top Brands</h2>

        </div>
      <div className="card-section">
      {CardData.map((d) => (
          <div className="card">
            <div className="image_card">
              <img src={d.img} alt={d.offer} />
            </div>
            <div className="card-text">
              <h2>{d.offer}</h2>
              <p>{d.text}</p>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Card;


const CardData = [
  {
    img: "https://images-static.nykaa.com/creatives/1d165ab6-82db-41a9-84ba-e8c84c58effa/default.jpg?tr=w-400,cm-pad_resize",
    offer: "Upto 50% Off+",
    text: "Win Existing Prices!",
  },
  {
    img: "https://images-static.nykaa.com/creatives/17828710-cadb-416f-8582-1850d44e1815/default.jpg?tr=w-400,cm-pad_resize",
    offer: "Flat 5% Off ",
    text: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/creatives/983a1d7e-ee41-498c-bcd2-0a4016cf106b/default.jpg?tr=w-400,cm-pad_resize" ,
    offer: "Upto 30% Off ",
    text: "Additional 10% Off 0n 1299",
  },
  {
    img: "https://images-static.nykaa.com/creatives/0733ecfb-133a-4e8b-86ca-34e932b0e1b1/default.jpg?tr=w-400,cm-pad_resize" ,
    offer: "Upto 35% Off ",
    text: "On Makeup Bestsellers",
  },
  {
    img: "https://images-static.nykaa.com/creatives/766c059d-e681-47bf-8b7c-966f8295cf61/default.jpg?tr=w-400,cm-pad_resize",
    offer: "Upto 30% Off ",
    text: "Gift On Purchase",
  },
   {
    img:"https://images-static.nykaa.com/creatives/16964a02-96f6-40d0-a40b-bf8891c4d0cf/default.jpg?tr=w-400,cm-pad_resize",
    offer: "Upto 30% Off ",
    text: "Gift On Purchase",
  },
];
