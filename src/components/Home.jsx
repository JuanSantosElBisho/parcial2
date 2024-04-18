import React from "react";
import { useState, useEffect} from 'react';
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";

const auth = getAuth (appFirebase);




const Home = ({correoUsuario}) => {
    let [pageNumber, setPageNumber] = useState(1); 
    let[search, setSearch] = useState("");
    let [fetcheData, updateFetcheData] = useState([]);
    let {info, results} = fetcheData

    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
    useEffect(()=>{

(async function(){
    let data = await fetch(api).then(res=>res.json());
    updateFetcheData (data);
    
})()

    },[api])
    
    
    
    return (
        <div> 
            <h1 className="text-center Ubuntu my-4">
            PONTE <span className="text-success">RICKOSO</span> CLUB
            </h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
        
        <div className="contenedor">
            <div className="row">
            <div className="col-2">
            <button className='btnOut' onClick={() =>signOut(auth)} >Cerrar Sesion</button>
            </div>
                <div className="col-8">
                <div className="row">
                    <Cards results={results} />
                </div>
                </div>
            </div>
        </div>


        
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
    )
}





export default Home