import React from "react";
import { useState, useEffect} from 'react';
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filter from "./Filters/Filter";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";

const auth = getAuth (appFirebase);




const Home = ({correoUsuario}) => {
    let [pageNumber, setPageNumber] = useState(1); 
    let [fetcheData, updateFetcheData] = useState([]);
    let {info, results} = fetcheData

    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    useEffect(()=>{

(async function(){
    let data = await fetch(api).then(res=>res.json());
    updateFetcheData (data);
    
})()

    },[api])
    
    
    
    return (
        <div> 
            <div className="text-center titulo my-4"><h1>RICKOSO CLUB</h1></div>
            <button className='btnSwitch' onClick={() =>signOut(auth)} >Cerrar Sesion</button>
        <div className="contenedor">
            <div className="row">
            <div className="col-2">
            <Filter />
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