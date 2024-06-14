import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "../assets/styles/busqueda.css"

const URL_Base = "https://pokeapi.co/api/v2/pokemon"

function Busqueda() {

    const [dataPokemon, setDataPokemon] = useState([]);
    const [dataName, setDataName] = useState({});

    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch(URL_Base)
            const { results } = await response.json()
            setDataPokemon(results)

            //!otra forma de traer los datos
            // const data = await response.json()
            // setDataPokemon(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    //funcion que se ejecuta con los paréntesis(callback, Array de dependencias)
    useEffect(() => {
        getData();
    }, []);

    return (


        <div className='busquedaPokemon'>
            <select className='m-3 selectBusqueda' value={dataName} onChange={(e) => setDataName(e.target.value)}>
                <option value="" disabled defaultValue>Selecciona tu Pokemon</option>
                {
                    dataPokemon.map(({ name }) => <option key={name} value={name}>{name}</option>)
                }
            </select>
            <button className='m-3' onClick={() => navigate(`/Pokemon/${dataName}`)}>Ver Habilidades</button>;
        </div>
    )
}

export default Busqueda