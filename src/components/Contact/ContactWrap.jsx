import React from 'react'
import ContactCommentWrap from './ContactCommentWrap'
import ContactEmailViews from './ContactEmailViews'

const ContactWrap = () => {
    return (
        <div className='contact_wrap'>
            <div className='contact_content_wrap'>
                <ContactEmailViews/>
                <ContactCommentWrap/>
            </div>
        </div>
    )
}

export default ContactWrap