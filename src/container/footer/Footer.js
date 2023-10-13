import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_first_section'>
            
             <div className="footer_first-div">
              
                <div>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16"><title>Envelope icon</title><path fill="#FFF" fill-rule="nonzero" d="M0 0v1.294C2.952 3.87 9.034 9.18 9.532 9.618c.62.545 1.233.604 1.468.604.235 0 .848-.058 1.468-.603.48-.422 6.357-5.604 9.532-8.405V0H0zm22 2.222c-3.261 2.912-8.504 7.593-8.956 7.995-.843.75-1.71.832-2.044.832-.334 0-1.201-.081-2.044-.833C8.488 9.8 3.099 5.037 0 2.298V16h22V2.222z"></path></svg></i>
                 get special discount on your inbox
                </div>
                <form className='form'>
                    <input type='email' placeholder='YOUR EMAIL' />
                    <button>SEND</button>
                </form>

             </div>
             <div className="footer_first-div">
               <div>
                 <i class="css-wbegjz"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><title>mobile icon</title><path fill="#FFF" fill-rule="nonzero" d="M1.364 0A1.37 1.37 0 0 0 0 1.364v17.272A1.37 1.37 0 0 0 1.364 20h9.09a1.37 1.37 0 0 0 1.364-1.364V1.364A1.37 1.37 0 0 0 10.455 0H1.364zM.909 3.182h10v13.182h-10V3.182zm3.636 14.545h2.728a.455.455 0 0 1 0 .91H4.545a.455.455 0 0 1 0-.91z"></path></svg></i>
                 EXPERIENCE THE NYKAA MOBILE APP

               </div>
               
               <div className='mobile-apps'>
                <a><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq99-zjbX8XrZlmqkru0OOZTENe75EerCIgCKeK28m6Wwx5ssGXi_eP0MA1XLcI5yJDnM&usqp=CAU' alt='plastore'/> </a>
                <a><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuufR91Cic290x-0BGz-y5pwhyOynecYYYGWlbcSM6_UH2kDDEggrvDzptbHmDT8TgZU&usqp=CAU' alt='appstore'/> </a>

               </div>


             </div>
             <div className="footer_first-div">

              <div className='footer_first-div2'>
              <div className='phone-icon'>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30"><path fill="#FFF" d="M24.02 30h-.03c-5.01-.164-10.88-5.02-14.925-9.068C5.015 16.885.16 11.013.003 6.026c-.058-1.75 4.237-4.862 4.28-4.893 1.115-.776 2.352-.5 2.86.203.344.476 3.6 5.409 3.953 5.969.368.58.313 1.445-.145 2.312-.253.482-1.092 1.956-1.485 2.643.425.605 1.547 2.086 3.865 4.404 2.32 2.318 3.8 3.443 4.406 3.867.687-.393 2.161-1.232 2.643-1.484.854-.453 1.714-.51 2.3-.151.599.367 5.518 3.638 5.971 3.953.38.268.625.727.675 1.26.046.54-.12 1.11-.467 1.607-.028.042-3.104 4.284-4.838 4.284z"></path></svg>
               </div>
               <div>
                 FOR ANY HELP, YOU MAY CALL US AT <br/>1800-267-4444
                  <div className='available-time'>
                  (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                  </div>
               </div>


              </div>
              
             </div>
            
        </div>
        <div className='footer_second-section'>
          <div className='second_section_div'>
             <a><img src='data:image/png;base64,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' alt='logo'/></a>
             <ul>
              <li>Who are we</li>
              <li>Careers</li>
              <li>Athuentically</li>
              <li>Press</li>
              <li>Testimonials</li>
              <li>Nykaa CSR</li>
              <li>Responsible Disclosure</li>
              <li>Invester Relations</li>
              <li>Link to smart ODR</li>
              
             </ul>
          </div>
          <div className='second_section_div'>
             <h4>Help</h4>
             <ul>
              <li>Contact us</li>
              <li>Frequently asked questions</li>
              <li>Store Locator</li>
              <li>Cancellation & Return</li>
              <li>Shipping and delivery</li>
              <li>Sell on Nykaa</li>
             </ul>
          </div>
          <div className='second_section_div'>
             <h4>Inspire Me</h4>
             <ul>
              <li>Beauty Book</li>
              <li>Nykaa TV</li>
              <li>Nykaa Network</li>
              <li>Buying Guides</li>
              

             </ul>
          </div>
          <div className='second_section_div'>
             <h4>Quik Links</h4>
             <ul>
              <li>Odder Zone</li>
              <li>New Launches</li>
              <li>Nykaa Man</li>
              <li>Nykaa Fashion</li>
              <li>Nykaa Pro</li>
              

             </ul>
          </div>
          <div className='second_section_div'>
             <h4>Top Categories</h4>
             <ul>
              <li>Makeup</li>
              <li>Skin</li>
              <li>Hair</li>
              <li>Bath & Body</li>
              <li>Appliances</li>
              <li>Mom and Baby</li>
              <li>Health & Wellness</li>
              <li>Fragrance</li>
              <li>Natural</li>
              <li>Luxe</li>

             </ul>
          </div>

        </div>
        <div className='footer_third-section'>
          <div className='third_section-div' >
            <div className='third_section-box'>
            <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="Free Shipping"/>
              <div  className='third-section_text-box'>
                <div className='third_div-heading'>
                     free shipping
                </div>
                <div className='third_div-text'>
                    On Orders Above !299
                </div>
              </div>
            </div>

          </div>
          <div className='third_section-div' >
            <div className='third_section-box'>
            <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="Easy Returns"/>
              <div  className='third-section_text-box'>
                <div className='third_div-heading'>
                   easy return
                </div>
                <div className='third_div-text'>
                    15-days return policy
                </div>
              </div>
            </div>

          </div>
          <div className='third_section-div' >
            <div className='third_section-box'>
            <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="brands count"/>
              <div  className='third-section_text-box'>
                <div className='third_div-heading'>
                     100% Authentic
                </div>
                <div className='third_div-text'>
                    Product Sourced Dirctly
                </div>
              </div>
            </div>

          </div>
          <div className='third_section-div' >
            <div className='third_section-box'>
            <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="1900+ Brands"/>
              <div className='third-section_text-box'>
                <div className='third_div-heading'>
                     1900+ brands
                </div>
                <div className='third_div-text'>
                   1.2 Lakh+ Products
                </div>
              </div>
            </div>

          </div>
          <div className='third_section-icons'>
            <div className='social_media-heading'>
              show some love ❤ on social media
            </div>
            <ul className='social-medias' >
              <li ><a href="https://www.instagram.com/mynykaa/?ref=badge" target="_blank" rel="noopener noreferrer" class="css-1sktyga"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="Instagram"/></a></li>
              <li ><a href="https://www.facebook.com/MyNykaa" target="_blank" rel="noopener noreferrer" class="css-1sktyga"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="Facebook"/></a></li>
              <li ><a href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA" target="_blank" rel="noopener noreferrer" class="css-1sktyga"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="Youtube"/></a></li>
              <li ><a href="https://twitter.com/MyNykaa" target="_blank" rel="noopener noreferrer" class="css-1sktyga"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="Twitter"/></a></li>
              <li><a href="https://www.pinterest.com/mynykaa/" target="_blank" rel="noopener noreferrer" class="css-1sktyga"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="Pinterest"/></a></li>
            </ul>

          </div>

        </div>
        <div className='footer_fourth-section'>
          <div className='fourth_link-section'>
            <ul className='fourth_links'>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
              <li>Cancellation Policy</li>
              <li>Privacy Policy</li>
            </ul>

          </div>
          <div className=' fourth_copyright-section'>
          <p ><span>©</span> 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
          </div>

        </div>






      
    </div>
  )
}

export default Footer

