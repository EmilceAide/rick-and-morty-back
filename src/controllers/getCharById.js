const axios = require('axios'); 
const { URL } = process.env;

const getCharById = (req, res) =>{
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

module.exports = getCharById; 