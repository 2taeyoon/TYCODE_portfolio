import React from 'react'

const ContactCommentItem = ({commentItem}) => {
    return (
        <li>
            <div className='contact_comment_item_image' style={{ background: `${commentItem.image} no-repeat center center / cover` }}></div>
            <div className='contact_comment_item_text_wrap'>
                <div className='contact_comment_item_comment'>{commentItem.comment}</div>
                <div className='contact_comment_item_date'>{commentItem.dateTime}</div>
            </div>
        </li>
    )
}

export default ContactCommentItem