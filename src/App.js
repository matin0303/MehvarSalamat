import './App.css';
import Article from './pages/articles/article';
import ConsultantsPage from './pages/consultants-page/consultants-page';
import MainPage from './pages/main-page/main-page';
import { Route , Routes} from 'react-router-dom'
import NewsAndArticles from './pages/news-and-articles/news-and-artiles-page';
import Bmipage from './pages/bmi/bmi-page';


function App() {
  return (
    <div className="App">
      <Routes>    
        <Route path='/MehvarSalamat' element={<MainPage/>} />
        <Route path='/article/:id' element={<Article/>} />
        <Route path='/consultants' element={<ConsultantsPage/>}/>
        <Route path='/newsandarticles' element={<NewsAndArticles/>}/>
        <Route path='/bmi' element={<Bmipage/>}/>
      </Routes>
    </div>
  );
}

export default App;
