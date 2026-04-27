let products = [
    { id: 1, name: "shirt" }
];

//GET
export const getProducts = (req, res) => {
    res.json(products);
};

//POST
export const createProduct = (req, res) => {
    const { id, name } = req.body;
    products.push({ id, name, age });

    res.json({
        message: "Product created",
        data: products
    });
};