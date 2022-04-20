import { MDBBtn } from "mdb-react-ui-kit";
import{ useContext } from "react"
import { QueryContext, ResultObj } from "../state/QueryContext"

export default function ResultSearch() {
    const queryContext = useContext(QueryContext);
    const result = queryContext.query.results?.map((films) =>{
        return <h2 key={films.episode_id}>{films.title}</h2>
    })
    const goBack = () => {
        queryContext.setQuery({isSearched:false})
    }
    return(
        <div>
            <h2>
                <MDBBtn onClick={goBack}>Search again</MDBBtn> Go Back
            </h2>
            {result}
        </div>
    );
}
