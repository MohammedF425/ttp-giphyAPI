import React from "react";


const SearchField = ({searchTerm, setSearchTerm, fetchGifs}) => {
    return (
        
        <div class >
            <form id="searchForm" class="form-control form-control-lg">
                <h2>Search a term</h2>
                <input type="text" value={searchTerm} onChange = {(e)=>{setSearchTerm(e.target.value)}}></input>
                <button type="submit" onClick={(e) => { fetchGifs(e, true, false, false);}}>Search</button>
                <br></br>
            </form>
            <form>
            <button type="submit" style={{ marginTop: '10px', marginBottom: '10px' }} onClick={(e) => { fetchGifs(e, false, true, false); }}>See what's trending</button>                
            </form>
            <form>
             <button type="submit"  onClick={(e) => { fetchGifs(e, false, false, true); }}>See Random Gif</button>
            </form>

            
        </div>
    )
}

export default SearchField;