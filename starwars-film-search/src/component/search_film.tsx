import { MDBContainer,MDBRow,MDBCol } from "mdb-react-ui-kit"
import History from "./history"
import Search from "./search"
import{ useContext } from "react"
import { QueryContext,ResultObj } from "../state/QueryContext"
import ResultSearch from "./result_search"

export default function SearchFilm() {
  const queryContext = useContext(QueryContext);

  const handleSearch = (val : string,valType:  'query' | 'history') => {
    let history = queryContext.history.h;
    const url = "https://swapi.dev/api/films/?search=" + val;
    fetch(url)
    .then(response => response.json())
    .then((results) => {
        //const [title,created,director,edited,episode_id,opening_crawl,producer,release_date,url] = results.results[0];
        let resArray = results.results as ResultObj[];
        if(resArray.length !== 0){
          if(valType !== 'history') if(val) history ? queryContext.setHistory({h:[...history,val]}) : queryContext.setHistory({h:[val]})
          queryContext.setQuery({results:resArray,isSearched:true})
        }    
    });
}
  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol size={8} className='p-5'>
                Search Film
                {queryContext.query.isSearched ? <ResultSearch /> : <Search handleSearch={handleSearch} />}
            </MDBCol>
            <History handleSearch={handleSearch} />
        </MDBRow>
    </MDBContainer>
  )
}
