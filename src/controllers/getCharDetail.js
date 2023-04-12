const axios = require('axios'); 
const { URL } = process.env;

const getCharDetail = (req, res) =>{
    const {id} = req.params; 

    axios 
    .get(`${URL}/character/${id}`)
    .then((response) => {
        const {id, name, species, image, gender} = response.data;
        res.status(200).json({ id, name, species, image, gender }); 
    })
    .catch((err)=>{
        res.status(500).json({error: err.message})
    })



}

module.exports = getCharDetail; 


// const axios = require('axios'); 

// const getCharDetail = (res, id) =>{
// axios.get(`https://rickandmortyapi.com/api/character/${id}`)
// .then(result => result.data)
// .then(data => {
//     let character = {
//         id: data.id,
//         name: data.name,
//         image: data.image, 
//         gender: data.gender, 
//         species: data.species,
//         status: data.status,
//         origin: data.origin.name
//     }
//     res
//     .writeHead(200, {"Content-type": "application/json"})
//     .end(JSON.stringify(character))

// })
// .catch(err => 
//     res
//     .writeHead(500, {"Content-type": "text/plain"})
//     .end(`El personaje con id: ${id} no fue encontrado`)
    
//     )

// }

// module.exports = getCharDetail; 