import React, { useState, useEffect } from 'react'
import ContactEmailWrap from './ContactEmailWrap'
import { getHits, updateHits } from '../../api/firebase'

const ContactEmailViewsWrap = () => {
    const [hits, setHits] = useState(0); // 조회수를 상태로 관리합니다.

    useEffect(() => {
        //let aa;
        getHits((callback)=>{
            //let aa = callback +1;
            //console.log('aa',aa)
            //setHits(aa)
            updateHits(callback);
            console.log('first', callback)
            
            //console.log('밑에 콘솔', updateHits(aa));
        })
        
        
    },[])

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