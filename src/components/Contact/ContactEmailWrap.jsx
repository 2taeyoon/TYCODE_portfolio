import React from 'react'

const ContactEmailWrap = ({title, email}) => {
    return (
        <div className='contact_email_wrap'>
            <div className='contact_email_title'>{title}</div>
            <div className='contact_email'>{email}</div>
        </div>
    )
}

export default ContactEmailWrap