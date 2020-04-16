import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = { "error": "Could not find Type." };

    let pokemon = getPokemon.getPokemontypeList(req.query.typeList);

    if (pokemon !== null) {
        result = pokemon;
    }

    res.json(result);
}