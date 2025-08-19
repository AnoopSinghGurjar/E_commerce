
const ByService = require('../services/ProductService');
const ByProduct = async(req, res) =>{
    try{
        const productId = req.params.Id;
        const userId = req.user.id;
        ByService(productId, userId);

    }
    catch(error){
        console.error("Error in ByProduct controller", error);
        res.Status(500).json({massage:"Internal server error"});
    }
}

module.exports = ByProduct;