import {useState, useEffect} from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
import axios from 'axios'; 
import { API_KEY } from './key'; 
 
const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test" 
const apiKey = API_KEY; 
 
 
function App() { 
 
  const [articles, setArticle] = useState([]); 
 
  useEffect(() => { 
    console.log(apiKey); 
    axios 
      .get(src) 
      .then(data => { 
        setArticle(data.data.response.results); 
      }) 
  }, []); 
 
  return ( 
    <div className="App"> 
      {articles.map(article => { 
        return ( 
          <p><a href={article.webUrl}>{article.webTitle}</a></p> 
        ); 
      })} 
    </div> 
  ); 
} 
 
export default App;
