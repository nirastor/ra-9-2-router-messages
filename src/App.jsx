import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import AddPostPage from './components/pages/AddPostPage';
import SinglePostPage from './components/pages/SinglePostPage';
import EditPostPage from './components/pages/EditPostPage';
import './App.css';


export default function App() {
  return (
    <div className='app'>
      <Router>
        <Route path='/' exact component={MainPage} />
        <Route path='/posts/new' component={AddPostPage} />
        <Route path='/posts/:id' component={SinglePostPage} />
        <Route path='/edit/:id' component={EditPostPage} />
      </Router>
    </div>
  );
}
