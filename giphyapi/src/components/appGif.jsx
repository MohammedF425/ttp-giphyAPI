import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchField from './searchField'
import GifCard from "./gifCard";

const App = () => {
        const apiKey = 'sBoTSb0914r6ljr0gq3P3Gmc149jKBRw';
        const [searchTerm,setSearchTerm] = useState()
        const[gifs, setGifs] = useState([]);
        

        const fetchGifs = (e, bool1, bool2, bool3) => {
            e.preventDefault();
            try {
                if(bool1){
                    fetchRegularSearch();
                }else if(bool2){
                    fetchTrendingSearch();
                    console.log(gifs)
                }
                else if(bool3){
                    fetchRandomSearch();
                }
            } catch (error) {
              console.error(error);
            }
        }
          const fetchRegularSearch = async () => {
              let jifs = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);
              jifs = jifs.data;
              let arr = []
              for (const key in jifs['data']){
                  arr.push(jifs['data'][key]['images']['original']['url'])
              }
              setGifs(arr);
        }
          
        const fetchTrendingSearch = async () => {
            let jifs = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
            jifs = jifs.data;
            let arr = []
            for (const key in jifs['data']){
                arr.push(jifs['data'][key]['images']['original']['url'])
            }
            setGifs(arr);
        }
    
        const fetchRandomSearch = async () => {
            let jifs = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
            jifs = jifs.data;
            let arr = [jifs.data.images.original.url]
            setGifs(arr);
        }





    return (
        <div>
            <h1 className="main-heading">Giphy API</h1>

            <SearchField searchTerm={searchTerm} setSearchTerm = {setSearchTerm} fetchGifs = {fetchGifs} />
            <GifCard gifarray={gifs} />

        </div>

    )
}

export default App;