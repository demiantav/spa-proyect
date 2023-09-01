export async function getCharacters(name){

    const URI = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=5&apikey=e3d56c780c36ed0ece38b000428dd807&hash=e720c45846d36da72a2ec04f1a95db6d`

    try {

        const res = await fetch(URI);
        const json = res.json();

        return json;
        
    } catch (error) {

        console.log(error);
        
    }
}