const getAllAPIEndPoints = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            endPoints : "List of endpoints are as follows - 1. /Banner 2. /Bollywood 3. /Fitness 4. /Food 5. /Hollywood 6. /Travel 7. /Technology"
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports = {getAllAPIEndPoints};