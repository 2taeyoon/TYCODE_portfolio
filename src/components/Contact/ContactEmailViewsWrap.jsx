import React from 'react'
import ContactEmailWrap from './ContactEmailWrap'


const ContactEmailViewsWrap = () => {
    return (
        <>
            <div className='contact_email_views_wrap'>
                <div className='contact_views_hits'>조회수 2백만</div>
                <div className='contact_email_wrap'>
                    <ContactEmailWrap title='E-mail' email='2tae@kakao.com'/>
                    <ContactEmailWrap title='Github' email='2taeyoon'/>
                </div>
            </div>
        </>
    )
}

export default ContactEmailViewsWrap