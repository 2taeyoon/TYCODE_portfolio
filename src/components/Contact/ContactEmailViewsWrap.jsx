import React, { useState, useEffect } from 'react'
import ContactEmailWrap from './ContactEmailWrap'
import { getHits, updateHits } from '../../api/firebase'

const ContactEmailViewsWrap = () => {
    const [hits, setHits] = useState(0); // 조회수를 상태로 관리합니다.

    useEffect(() => {
        getHits((callback)=>{
            updateHits(callback);
            setHits(callback);
        })
    },[])

    const aa = hits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 문자열로 변환후 3자리 콤마 정규식으로 변환

    return (
        <>
            <div className='contact_email_views_wrap'>
                <div className='contact_views_hits'>조회수 {aa}</div>
                <div className='contact_email_wrap'>
                    <ContactEmailWrap title='E-mail' email='2tae@kakao.com' />
                    <ContactEmailWrap title='Github' email='2taeyoon' />
                </div>
            </div>
        </>
    )
}

export default ContactEmailViewsWrap