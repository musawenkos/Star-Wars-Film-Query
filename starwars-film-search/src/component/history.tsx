import { MDBCol } from "mdb-react-ui-kit"
import { useContext } from "react"
import { QueryContext,handleSearchProps } from "../state/QueryContext"


export default function History(props:handleSearchProps) {
    const queryContext = useContext(QueryContext);
    const historyList = queryContext.history.h?.map((history) =>{
        return <h2 key={history} onClick={() => props.handleSearch(history,'history')}>{history}</h2>
    })
  return (
    <MDBCol size={4}>
        History List
        {historyList}
    </MDBCol>
  )
}
