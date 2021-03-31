import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export default function AddPostPage({history}) {

  const URL = 'http://localhost:7777/posts'
  const [newPostText, setNewPostText] = useState('');
  const handleTextChange = ({ target }) => setNewPostText(target.value);

  const postNewPost = () => {
    if (!newPostText) {
      return;
    }
    axios.post(URL, { id: 0, content: newPostText })
      .then(() => {
        setNewPostText('')
        history.push('/')
      });
  };
  
  return (
    <>
      <div className='title'>Новая записть</div>
      <div className='addpost-block block'>
        <Link to='/'>
          <span className="material-icons addpost-close">close</span>
        </Link>
        <textarea className='addpost-textarea' rows="5" onChange={handleTextChange} value={newPostText}></textarea>
        <div className='btn' onClick={postNewPost}>Отправить</div>
      </div>
    </>
  );
}