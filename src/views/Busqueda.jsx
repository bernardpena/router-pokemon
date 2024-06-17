import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../assets/styles/css/busqueda.css"

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

        } catch (error) {
            console.log(error);
        }
    }

    //funcion que se ejecuta con los paréntesis(callback, Array de dependencias)
    useEffect(() => {
        getData();
    }, []);

    return (

        <>
            <div className='busquedaPokemon'>
                <Form.Select className='m-3 selectBusqueda' value={dataName} onChange={(e) => setDataName(e.target.value)}>
                    <option value="" disabled defaultValue>Selecciona a tu Pokemon</option>
                    {
                        dataPokemon.map(({ name }) => <option key={name} value={name}>{name}</option>)
                    }
                </Form.Select>
                <Button className='m-3 primary' variant="primary" onClick={() => navigate(`/Pokemon/${dataName}`)}>Ver a tu Pokemon</Button>

            </div>
        </>
    )
}

export default Busqueda