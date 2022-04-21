import { QueryContextProvider } from './state/QueryContext'; 
import SearchFilm from './component/search_film';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <QueryContextProvider>
        <SearchFilm />
      </QueryContextProvider>
    </div>
  );
}

export default App;
