require('dotenv').config();
const algoliaSearch = require('algoliasearch');
const products = require('./data/productos.json'); // Asumiendo que tienes un archivo JSON con los productos

const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

(async () => {
    try {
        const { objectIDs } = await index.saveObjects(products, { autoGenerateObjectIDIfNotExist: true });
        console.log('Products uploaded:', objectIDs);
    } catch (error) {
        console.error('Error uploading products:', error);
    }
})();
