import * as http from 'http';

async function getItems(keyword) {
    return new Promise(((resolve, reject) => searchAPI(keyword)).then((json) => {
        return resolve(parseJSON(json))
    }))
}

async function searchAPI(keyword) {
    let apiKey = "bkFXAolb3phZVMGX1yhl6uDQ"
    let baseURL = "https://api.bestbuy.com/v1/products"
    keyword = formatKeyword(keyword)
    let url = baseURL+"("+keyword+")?apiKey="+apiKey+"&format=json"
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.setEncoding("utf8");
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                try {
                    return resolve(JSON.parse(data));
                } catch (err) {
                    return resolve();
                }
            });
        }).on("error", (e) => {
            return resolve();
        });
    });
}

function formatKeyword(keyword) {
    return "search="+keyword.replace(/\s+/g, '&search=')
}

function parseJSON(json) {
    let productList = json["products"]
    let revisedJSONList = []
    productList.forEach((product) => {
        let jsonItem = {}
        jsonItem.name = product.name
        jsonItem.price = product.regularPrice
        jsonItem.url = product.url
        jsonItem.description = product.shortDescription
        jsonItem.images = product.images
        revisedJSONList.concat(jsonItem)
    })
}




//
// baseURL : https://api.bestbuy.com/v1/products
// keyword : (search=macbook&search=2015)
// apiKey : ?apiKey=bkFXAolb3phZVMGX1yhl6uDQ
// sortOptions : &sort=.asc
// responseFormat : &format=json
// Complete URL
// #request: copy
// https://api.bestbuy.com/v1/products((search=macbook&search=2015))?apiKey=bkFXAolb3phZVMGX1yhl6uDQ&format=json