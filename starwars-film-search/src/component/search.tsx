import {MDBInput,MDBBtn,MDBInputGroup } from "mdb-react-ui-kit"
import { useContext } from "react"
import { QueryContext, handleSearchProps } from "../state/QueryContext"


export default function Search(props:handleSearchProps) {
    const queryContext = useContext(QueryContext);
    const handleClick = () => {
        if(queryContext.query.q) props.handleSearch(queryContext.query.q, 'query')
    }
  return (
    <MDBInputGroup>
        <MDBInput 
            id='search_film'
            value={queryContext.query.q}
            onChange={(event) => queryContext ? queryContext.setQuery({q:event.target.value}): null }
        />
        <MDBBtn onClick={handleClick}>Search</MDBBtn>
    </MDBInputGroup>
  )
}
