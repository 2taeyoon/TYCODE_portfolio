import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { badWordKor } from '../data/badWord';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export const handleCommentSubmit = (event, labelRef) => {
    event.preventDefault();

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const ampm = hour >= 12 ? '오후' : '오전';
    const hour12 = hour % 12 || 12;

    const dateTimeString = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const timeString = `${ampm} ${hour12.toString()}시 ${minute.toString().padStart(2, '0')}분`;
    const dateTime = dateTimeString + " " + timeString;

    const commentInput = event.target[1];
    if(commentInput.value.trim() === ''){
        return alert('내용을 입력해주세요.');
    }
    if(badWordKor.includes(commentInput.value)){
        return alert('금칙어가 포함되어 있습니다.');
    }
    
    const labelBackgroundImage = labelRef.current.style.backgroundImage; // labelRef useRef로 component에서만 사용이 가능하므로 우선 인자로 넘겨준다

    const commentsRef = ref(database, 'comments');
    push(commentsRef, {
        comment: commentInput.value,
        dateTime: dateTime,
        image: labelBackgroundImage
    });
    commentInput.value = '';
};

export const fetchComments = (callback) => {
    const commentsRef = ref(database, 'comments');
    onValue(commentsRef, (snapshot) => {
        const commentsData = snapshot.val();
        const commentsList = commentsData ? Object.values(commentsData) : [];
        callback(commentsList);
    })
}




//const labelImageTag = event.target[0].labels[0];
//const labelImageData = getComputedStyle(labelImageTag);
//console.log('backgroundImage', labelImageData)
