import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../assets/styles/pokemon.css"

const URL_HABIL = "https://pokeapi.co/api/v2/pokemon/"

// Pokemon/ivysaur

function Pokemon() {
    const { name } = useParams();
    const [dataNamePoke, setDataNamePoke] = useState();
    // const [nPokemones, setNPokemones] = useState([]);

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

            //por cada Result (pokemon), necesitamos obtener la informacion
            // const nPokemones = results.map(async (namePoke) => {
            //     const response = await fetch(namePoke.url)
            //     const poke = await response.json()

            //     return {
            //         id: poke.id,
            //         name: poke.name,
            //         image: poke.sprites.other.dream_world.front_default,
            //         base_stat_hp: poke.base_stat,
            //         base_stat_attack: poke.base_stat

            //     }
            // })
            // setNPokemones(await Promise.all(nPokemones))

        } catch (error) {
            console.log(error);
        }
    }

    // const handleClearData = (productos) => {
    //     return productos.map((producto) => {
    //         let product_details = {};

    //         product_details['name'] = producto.name;

    //         fetch(producto.url)
    //             .then((response) => response.json())
    //             .then((producto) => {
    //                 const img = producto.sprites.other.home.front_default;
    //                 const stats = producto.stats.map((stat) => ({
    //                     name: stat.stat.name,
    //                     base_stat: stat.base_stat,
    //                 }));

    //                 product_details['id'] = producto.id;
    //                 product_details['weight'] = producto.weight;
    //                 product_details['image'] = img;
    //                 product_details['stats'] = stats;
    //             })
    //             .catch((error) => console.log(error));

    //         return product_details;
    //     });
    // };

    //!funcion que se ejecuta con los paréntesis(callback, Array de dependencias)
    useEffect(() => {
        getData2();
        console.log(dataNamePoke)
    }, [name]);

    return (

        <div className='bodyTarjeta'>
            {/* { */}
            {/* nPokemones.map(namePoke => { */}
            {/* return ( */}
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={dataNamePoke?.sprites?.other?.home?.front_default} />
                <Card.Body>
                    <Card.Title>{dataNamePoke?.name}</Card.Title>
                    {/* <Card.Body>HP :{dataNamePoke?.base_stat_hp}</Card.Body> */}
                    {/* <Button variant="primary"><Link className="buttonLink" to={"/Busqueda"}>ir a Busqueda</Link></Button> */}
                </Card.Body>
            </Card>
            {/* )
                }) */}
            {/* { */}
        </div>
    )
}

export default Pokemon