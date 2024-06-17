import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../assets/styles/css/pokemon.css"

const URL_HABIL = "https://pokeapi.co/api/v2/pokemon/"


function Pokemon() {
    const { name } = useParams();
    const [dataNamePoke, setDataNamePoke] = useState();


    const getData2 = async () => {
        try {
            //recuperamos listado de Pokemones
            const response = await fetch(URL_HABIL + name)
            const results = await response.json()
            setDataNamePoke(results)

            //!otra forma de traer
            // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            // const data = await response.json()
            // setDataPokemon(data.results)


        } catch (error) {
            console.log(error);
        }
    }


    //!funcion que se ejecuta con los paréntesis(callback, Array de dependencias)
    useEffect(() => {
        getData2();
        console.log(dataNamePoke)
    }, [name]);

    return (

        <div className='bodyTarjeta'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={dataNamePoke?.sprites?.other?.home?.front_default} />
                <Card.Body>
                    <Card.Title>{dataNamePoke?.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pokemon