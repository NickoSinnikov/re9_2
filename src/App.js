import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreationForm from './components/CreationForm';
import PostView from './components/PostView';
import MainPage from './components/MainPage';
import PostsProvider from './components/PostsProvider';

function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/posts/new" element={<CreationForm />} />
            <Route path="/posts/:id" element={<PostView />} />
            <Route path="/" exact element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </PostsProvider>
  );
}

export default App;
