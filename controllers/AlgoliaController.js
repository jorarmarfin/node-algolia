const algoliaSearch = require('algoliasearch');
// Configurar Algolia
const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

const createProduct = async (req, res) => {
    const { id, code, name } = req.body;
    try {
        await index.saveObject({
            objectID: id,
            code,
            name
        });

        // Envía solo una respuesta
        res.status(201).json({
            ok: true,
            message: 'Product created',
            data: req.body
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error creating product',
        });
    }
}

const deleteProduct = async (req, res) => {
    const { objectID } = req.params;
    if (!objectID) {
        return res.status(400).json({
            ok: false,
            message: 'objectID is required',
        });
    }

    try {
        await index.deleteObject(objectID);
        res.json({
            ok: true,
            message: 'Product deleted',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error deleting product',
        });
    }
}

module.exports = {
    createProduct,
    deleteProduct
}
