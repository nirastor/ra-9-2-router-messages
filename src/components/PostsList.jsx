import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import {Link} from 'react-router-dom';

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:7777/posts';
    axios.get(URL)
    .then(res => setPosts(res.data))
  }, []);

  const postsCards = posts.map(p => (
    <li key={p.id}>
      <Link to={`/posts/${p.id}`} className='link-normalizer'>
        <div className="block">
          <Post post={p}/>
        </div>
      </Link>
    </li>
  ))

  return (
    <ul>{postsCards}</ul>
  );
}