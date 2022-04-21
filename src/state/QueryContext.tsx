import React, {useState, createContext} from 'react'

export type ResultObj = {
    title:string,
    created:string,
    director:string,
    edited:string,
    episode_id:string,
    opening_crawl:string,
    producer:string,
    release_date:string,
    url:string
}
export type handleSearchProps = {
    handleSearch: (val : string,valType:  'query' | 'history') => void;
}

export type HistoryFilmSearch = {
    h?: string[]
}

export type QueryFilm = {
    q?: string ,
    results?:ResultObj[],
    isSearched?:boolean
}

type QueryContextType = {
    history: HistoryFilmSearch,
    setHistory: React.Dispatch<React.SetStateAction<HistoryFilmSearch>>,
    query: QueryFilm,
    setQuery: React.Dispatch<React.SetStateAction<QueryFilm>>
}
type QueryContextProviderProps = {
    children: React.ReactNode
}
export const QueryContext = createContext<QueryContextType>({} as QueryContextType);

export const QueryContextProvider = ({children}: QueryContextProviderProps) =>{
    const [query, setQuery] = useState<QueryFilm>({} as QueryFilm)
    const [history, setHistory] = useState<HistoryFilmSearch>([] as HistoryFilmSearch)
    return (
        <QueryContext.Provider value={{query, setQuery, history, setHistory}}>
            {children}
        </QueryContext.Provider>
    );
}