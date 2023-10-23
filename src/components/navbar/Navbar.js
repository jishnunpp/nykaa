
import React,{useState} from 'react'
import logo from '../../assets/logo1.png'
import './navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GrClose} from "react-icons/gr";
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [suggetion, setSuggetion] = useState(false);
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className='main_navbar'>

      <div className='section'>
        <div className='navbar-logo'>
        <img src={logo} alt='logo'/>
        <ul className='navbar-links'>
            <li><a>Categories</a></li>    
            <li   onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={()=>setIsShown(false)}
                 ><a>Brand</a></li>
            <li><a>Luxe</a></li>
            <li><a>Nykaa Fashion</a></li>
            <li><a>Beauty Advice</a></li>
         </ul>
         {isShown&&(
           <div className='brand_items-nav'>
            <div className='input_brand-nav'>
              <div >
                    <FiSearch />
                </div>
                <div>
                    <input  className='search_input-nyka' type='text' placeholder='Search on nykaa'/>
                </div>
            </div>
            <div className='brand_options' >
             <div className='brands-nav'>
               <div>
                <div id='top'className='section-heading'>topbrands</div>
                <div className='brand-list'>
                   <a>Lakeme</a>
                   <a>Biotique</a>
                   <a>Ponds</a>
                   <a>Clinque</a>
                    <a>VLCC</a>
                    <a>Plum</a>
                </div>
               </div>
               <div>
                <div id='#'className='section-heading'>#</div>
                <div className='brand-list'>
                   <a>18.21 Man Made</a>
                   <a>18m32</a>
                   <a>2.0h</a>
                   <a>23 Yards</a>
                    
                </div>
               </div>
               <div>
                <div id='a' className='section-heading'>A</div>
                <div className='brand-list'>
                   <a>A clutch story</a>
                   <a>A fragrance story</a>
                   <a>A-Derma</a>
                   <a>A'kin</a>
                    <a>Aadiva</a>
                    <a>Alum</a>
                </div>
               </div>
               <div  id='b'className='section-heading'>B</div>
                <div className='brand-list'>
                   <a>B.box</a>
                   <a>Babila</a>
                   <a>Baby alive</a>
                   <a>Baby Mob</a>
                    <a>Baby chakra</a>
                    <a>Baby ka</a>
                </div>
                <div id='c' className='section-heading'>C</div>
                <div className='brand-list'>
                   <a>c2p-pro</a>
                   <a>c9-airwear</a>
                   <a>callesta</a>
                   <a>calvados</a>
                    <a>calvin kelvin</a>
                    <a>caprico</a>
                </div>
               
               
                     
               
               

             </div>
             <div className='letters-nav'>
             <a href='#top' >Top</a>
             <a href='##' >#</a>
             <a href='#a' >A</a>
             <a href='#b' >B</a>
             <a href='#c' >C</a>
             <a href='#a' >D</a>
             <a href='#a' >E</a>
             <a href='#a' >F</a>
             <a href='#a' >G</a>
             <a href='#a' >H</a>
             <a href='#a' >I</a>
             <a href='#a' >J</a>
             <a href='#a' >K</a>
             <a href='#a' >L</a>
             <a href='#a' >M</a>
             <a href='#a' >N</a>
             <a href='#a' >O</a>
             <a href='#a' >P</a>
             <a href='#a' >Q</a>
             <a href='#a' >R</a>
             <a href='#a' >S</a>
             <a href='#a' >T</a>
             <a href='#a' >U</a>
             <a href='#a' >W</a>
             <a href='#a' >X</a>
             <a href='#a' >Y</a>
             <a href='#a' >Z</a>
             
          

              
             </div>
            </div>
            

         </div>
         )

         }
        

       
         
        <div >
        
       
         <div className='div-input'onClick={()=>setSuggetion(true)} onBlur={()=>setSuggetion(false)}>
              <div >
                    <FiSearch />
                </div>
                <div>
                    <input  className='search_input-nyka' type='text' placeholder='Search on nykaa'/>
                </div>
            </div>
            </div>

        </div>

      </div>




         {suggetion&&(
          <div className='nav-input'>
          <div className=' input_box'>
            <div className='color-box     '>
              <div >
                    <FiSearch />
                </div>
                <div>
                    <input  className='search_input-nyka' type='text' placeholder='Search on nykaa'/>
                </div>
            </div>
          
          
          
          <div  className='input_suggetion'>
            
              <div className='heading-box' >
                <h4 >Trending Searches</h4>
              </div>
              <ul className='input-options'>
                <li ><span className='option-icon'><img src="https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg" alt="trending icon"/></span><span className='options' >Nykaa Cosmetics</span></li>
                <li><span  className='option-icon'><img src="https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg" alt="trending icon"/></span><span >Face Masks</span></li>
                <li ><span className='option-icon'><img src="https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg" alt="trending icon"/></span><span >Nykaa Naturals</span></li>
                <li><span className='option-icon'><img src="https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg" alt="trending icon"/></span><span >Lipstick</span></li>
                <li ><span className='option-icon'><img src="https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg" alt="trending icon"/></span><span >Hand Sanitisers</span></li>
                </ul>
                </div>

         
          </div>
          </div>
         )}
    
        <div className='navbar-sign' >
          <button type='button' onClick={() => setToggleMenu(true)} >Sign in</button>
            {toggleMenu && (
          <div className='popup'>
           <div className='heading_signin'>
           <div className='close-btn' onClick={() => setToggleMenu(false)}> < GrClose/></div>
          <h3>Login / Create Account </h3>
           </div>
           <div>
           <p>Register now and get<b> 2000 Nykaa reward points instantly!</b></p>
           </div>
           <div>
        <Link to='login'>   <button type='button'>Sign in with Mobile / Email<div className='arrow'><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path></svg></div></button></Link> 
            <button>Google<div className='arrow' ><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path></svg></div></button>
           </div>
        
             
       
         </div>
        )}
        <div className='cart'>

        <HiOutlineShoppingBag />
        </div>
        
        
      </div>





        
        
      
    </div>
  )
}

export default Navbar
