import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from './components/posts'; // Assuming 'Posts' is a component
import Post from './components/post'; // Assuming 'Post' is a component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
