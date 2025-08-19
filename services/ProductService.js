const ProductService = async(productId, userId) =>{
    try{
        console.log(`Bying product with ID:${productId} for user ID: ${userId}`);
    }
    catch(error){
        console.error("Error in Productservices:", error);
    }
}

module.exports = ProductService;