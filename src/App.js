import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NewsBlock from './components/NewsBlock';
import {Route, Routes} from 'react-router-dom';
import BlogItem from './components/BlogItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NewsBlock />} /> 
        <Route path="/blog/:id" element={<BlogItem />} />
      </Routes> 
    </div>
  );
}

export default App;
