import React from 'react'
import ContactCommentWrap from './ContactCommentWrap'
import ContactEmailViewsWrap from './ContactEmailViewsWrap'

const ContactWrap = () => {
    return (
        <div className='contact_wrap'>
            <div className='contact_content_wrap'>
                <ContactEmailViewsWrap/>
                <ContactCommentWrap/>
            </div>
        </div>
    )
}

export default ContactWrap