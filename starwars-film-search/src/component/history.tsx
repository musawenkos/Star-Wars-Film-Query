import { MDBCol } from "mdb-react-ui-kit"
import { useContext } from "react"
import { QueryContext,handleSearchProps } from "../state/QueryContext"


export default function History(props:handleSearchProps) {
    const queryContext = useContext(QueryContext);
    const historyList = queryContext.history.h?.map((history) =>{
        return <h2 key={history} onClick={() => props.handleSearch(history,'history')} style={{cursor:"pointer",marginTop:"10px",color:"black",borderRadius:"5px", backgroundImage:"linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,1))", boxShadow: "10px 10px 10px rgba(30,30,30,0.2)"}}>{history}</h2>
    })
  return (
    <MDBCol size={4} style={{height: "65vh", overflow: "scroll", overflowX:"hidden",color:"black"}}>
        <h4> Search History</h4>
        {historyList}
    </MDBCol>
  )
}