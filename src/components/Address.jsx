import React from 'react'
import fb from '../assets/icons/fb.svg';
import x from '../assets/icons/X.svg';
import ig from '../assets/icons/ig.svg';
import skype from '../assets/icons/skype2.svg';
import phone from '../assets/icons/phone.svg'
import message from '../assets/icons/message.svg'



function Address() {
  return (
    <address id='align-center' className='w-ful bg-[#1E293B] pl-3 rounded-none font-sans
     justify-between flex  gap-3 p-3'>
    
    <div className="flex gap-4">
        <p>Mon to Fir 9am to 6pm</p>
        <a href="##"><img src={fb} alt="facebook-logo" className='w-7' /></a>
        <a href="##"><img src= {x} alt="twitter-logo" /></a>
        <a href="##"><img src={ig} alt="instagram-logo" className='w-7' /></a>
        <a href="##"><img src={skype} alt="skype-logo" className='w-7' /></a>
    </div>
    
    <div  className="flex pr-28 gap-3">
        <img src= {phone} alt="phone-logo" />
        <a href="tel:+1800001658" className='text-white mr-10 hover:text-[rgba(247,168,103,0.92)] '>+1800001658</a>
        <img src= {message} alt="message-logo" />
        <a href="mailto:someone@example.com" className='text-white hover:text-[rgba(247,168,103,0.92)] '>info@Peacefulthemes.com</a>

    </div>

    </address>
  )
}

export default Address