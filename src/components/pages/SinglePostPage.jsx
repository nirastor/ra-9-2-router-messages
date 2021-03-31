/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Post from '../Post';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function SinglePostPage({match, history}) {
  const id = match.params.id;
  const URL = 'http://localhost:7777/posts';
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    axios.get(URL)
    .then(res => setPost(res.data.find(p => Number(p.id) === Number(id))))
  }, []);

  const onDelete = () => {
    axios.delete(`${URL}/${id}`)
      .then(() => history.push('/'))
  }

  const html = <>
    <Link to='/' className='link-normalizer'>
      <div className='post-back'>&lt; Назад</div>
    </Link>
    <div className='block'>
      <Post post={post} /> 
      <div className='post-buttons'>
        <div className='btn mr-3'>
          <Link to={`/edit/${id}`} className='link-normalizer'>
            Редактровать
          </Link>
        </div>
        <div className='btn btn-del' onClick={onDelete}>Удалить</div>
      </div>
    </div>
  </>
  
  return (
    <>
      { post && html }
    </>
  );
}