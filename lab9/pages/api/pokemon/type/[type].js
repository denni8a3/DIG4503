import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = { "error": "Could not find Type." };

    let pokemon = getPokemon.getPokemonList(req.query.List);

    if (pokemon !== null) {
        result = pokemon;
    }

    res.json(result);
}