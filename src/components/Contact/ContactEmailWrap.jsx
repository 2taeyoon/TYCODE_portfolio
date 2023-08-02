import React from 'react'

const ContactEmailWrap = ({title, email, gitLink}) => {
    return (
        <a href={gitLink} target='_blank' rel='noopener noreferrer'>
            <div className='contact_email_title'>{title}</div>
            <div className='contact_email'>{email}</div>
        </a>
    )
}

export default ContactEmailWrap