import React from 'react'

function Address() {
  return (
    <address className='bg-gray-900 pt-4 pb-4 rounded-none sticky top-0 font-serif w-full justify-between flex  gap-3 mt-1.5'>
    
    <div className="flex gap-4">
        <p>Mon to Fir@9am to 6pm</p>
        <img src="src\assets\icons\fb.svg" alt="facebook-logo" className='w-7' />
        <img src="src\assets\icons\X.svg" alt="twitter-logo" />
        <img src="src\assets\icons\instagram.svg" alt="instagram-logo" className='w-7' />
        <img src="src\assets\icons\skype.svg" alt="skype-logo" className='w-7' />
    </div>
    
    <div className="flex pr-28 gap-3">
        <img src="src\assets\icons\phone.svg" alt="phone-logo" />
        <a href="tel:+1800001658" className='text-white mr-10'>
        +1800001658</a>
        <img src="src\assets\icons\message.svg" alt="message-logo" />
        <a href="mailto:someone@example.com" className='text-white'>
            info@Peacefulthemes.com</a>

    </div>

    </address>
  )
}

export default Address