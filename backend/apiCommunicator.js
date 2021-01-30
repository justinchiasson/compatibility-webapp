import * as http from 'http';

export async function getItems(keyword) {
    console.log("getItems function started")
    let json = await searchAPI(keyword)
    return parseJSON(json)
}

async function searchAPI(keyword) {
    console.log("searchAPI function started")
    let apiKey = "bkFXAolb3phZVMGX1yhl6uDQ"
    let baseURL = "https://api.bestbuy.com/v1/products"
    keyword = formatKeyword(keyword)
    let url = baseURL+"("+keyword+")?apiKey="+apiKey+"&format=json"
    return new Promise((resolve, reject) => {
        console.log("in the new Primise (resolve, reject)... thing")
        http.get(url, (res) => {
            res.setEncoding("utf8");
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                try {
                    console.log(JSON.parse(data))
                    return resolve(JSON.parse(data));
                } catch (err) {
                    console.log("ERROR! : "+err)
                    return resolve();
                }
            });
        }).on("error", (e) => {
            console.log("error in http.get = "+e)
            return resolve();
        });
    });
}

function formatKeyword(keyword) {
    return "search="+keyword.replace(/\s+/g, '&search=')
}

function parseJSON(json) {
    let productList = json["products"]
    let jsonStr = '{"products":[]}';
    let revisedJSONList = JSON.parse(jsonStr);
    productList.forEach((product) => {
        try {
            let jsonItem = {}
            jsonItem.name = product.name
            jsonItem.price = product.regularPrice
            jsonItem.url = product.url
            jsonItem.description = product.shortDescription
            jsonItem.images = product.images
            revisedJSONList['products'].push(jsonItem);
        } catch (e) {
            console.log("error with jsonItem: " + e)
        }
    })
    console.log(revisedJSONList)
    return revisedJSONList
}

