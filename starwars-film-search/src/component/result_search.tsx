import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import{ useContext,useState } from "react"
import { QueryContext, ResultObj } from "../state/QueryContext"

export default function ResultSearch() {
    const [index, setIndex] = useState(0);
    const queryContext = useContext(QueryContext);
    const result = queryContext.query.results?.map((films) =>{
        return <h2 key={films.episode_id}>{films.title}</h2>
    })
    
    return(
        <div style={{overflow:"scroll",overflowX:"hidden", height:"48vh",fontWeight:"bold"}}>
            {
                queryContext.query.results?.map((film) =>{
                    return <MDBContainer style={{borderTop: "1px solid black",borderBottom: "1px solid black"}}>
                    <MDBRow>
                        <MDBCol size={10}><h3><b>{film.title}</b></h3></MDBCol>
                        <MDBCol size={2} className="d-flex flex-row-reverse">Episode id:{film.episode_id}</MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex align-items-center pt-2' >
                        <MDBCol >
                           <i>{film.opening_crawl}</i>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-2">
                        <MDBCol size={4}>Directed By: {film.director}</MDBCol>
                        <MDBCol size={4}>Produced By: {film.producer}</MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-2" >
                        <MDBCol size={4}>Edited date: {film.edited}.</MDBCol>
                        <MDBCol size={4}>Released date: {film.release_date}.</MDBCol>
                        <MDBCol size={4}>Created: {film.created}.</MDBCol>
                    </MDBRow>
                </MDBContainer>
                })
            }
            
        </div>
    );
}
