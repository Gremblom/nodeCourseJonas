const replaceTemplate = require('./modules/replaceTemplate');

// Debajo inicializacion const server
const {query, pathName} = url.parse(req.url, true);

/* Borramos todo de product page menos su res.end */
resizeBy.writeHead(200, {'Content-Tye' : 'text/html'});
const product = dataObj[query.id];

const output = replaceTemplate(tempProduct, product);

resizeBy.end(output);

// EN LA TEMPLATE DE PRODUCT
<a href="/overview" class="product__back">
    <span class="emoji-left"></span>Back
</a>

/*  PEGAR LA FUNCION REPLACETEMPLATE EN MODULES*/