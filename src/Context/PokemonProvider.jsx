import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = 'https://pokeapi.co/api/v2/pokemon';

    const fetchData = async () => {
        try {
            const pokemonJson = await fetch(API_URL);
            const { results } = await pokemonJson.json();

            const data = handleClearData(results);

            setLoading(false);
            setPokemon(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClearData = (pokemon) => {
        return pokemon.map((pokemon) => {
            let pokemon_details = {};

            pokemon_details['name'] = pokemon.name;
            fetch(pokemon.url)
                .then((response) => response.json())
                .then((pokemon) => {
                    const img = pokemon.sprites.other.home.front_default;
                    const stats = pokemon.stats.map((stat) => ({
                        name: stat.stat.name,
                        base_stat: stat.base_stat,
                    }));

                    pokemon_details['id'] = pokemon.id;
                    pokemon_details['weight'] = pokemon.weight;
                    pokemon_details['image'] = img;
                    pokemon_details['stats'] = stats;
                })
                .catch((error) => console.log(error));
            return pokemon_details;
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <PokemonContext.Provider value={{ pokemon, loading }}>
                {children}
            </PokemonContext.Provider>
        </>
    )


}