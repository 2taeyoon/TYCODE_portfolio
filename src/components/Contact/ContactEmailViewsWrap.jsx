import React, { useEffect, useState } from 'react'
import ContactEmailWrap from './ContactEmailWrap'
import { getHits, updateHits } from '../../api/firebase';


const ContactEmailViewsWrap = () => {
    const [hits, setHits] = useState(0);
    useEffect(() => {
        //updateHits(hits)
        getHits((callback) => {
            setHits(callback);
        });
    }, []);

    return (
        <>
            <div className='contact_email_views_wrap'>
                <div className='contact_views_hits'>조회수 {hits}</div>
                <div className='contact_email_wrap'>
                    <ContactEmailWrap title='E-mail' email='2tae@kakao.com' />
                    <ContactEmailWrap title='Github' email='2taeyoon' />
                </div>
            </div>
        </>
    )
}

export default ContactEmailViewsWrap