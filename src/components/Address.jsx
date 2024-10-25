import React from 'react'

function Address() {
  return (
    <address id='align-center' className='w-ful bg-[#1E293B] pl-3 rounded-none font-sans
     justify-between flex  gap-3 p-3'>
    
    <div className="flex gap-4">
        <p>Mon to Fir 9am to 6pm</p>
        <a href="##"><img src="src\assets\icons\fb.svg" alt="facebook-logo" className='w-7' /></a>
        <a href="##"><img src="src\assets\icons\X.svg" alt="twitter-logo" /></a>
        <a href="##"><img src="src\assets\icons\ig.svg" alt="instagram-logo" className='w-7' /></a>
        <a href="##"><img src="src\assets\icons\skype2.svg" alt="skype-logo" className='w-7' /></a>
    </div>
    
    <div  className="flex pr-28 gap-3">
        <img src="src\assets\icons\phone.svg" alt="phone-logo" />
        <a href="tel:+1800001658" className='text-white mr-10 hover:text-[rgba(247,168,103,0.92)] '>+1800001658</a>
        <img src="src\assets\icons\message.svg" alt="message-logo" />
        <a href="mailto:someone@example.com" className='text-white hover:text-[rgba(247,168,103,0.92)] '>info@Peacefulthemes.com</a>

    </div>

    </address>
  )
}

export default Address