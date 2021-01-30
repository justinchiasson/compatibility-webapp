import * as http from 'http';

export async function getItems(keyword) {
    return await searchAPI(keyword)
}

async function searchAPI(keyword) {
    let baseURL = "https://api.bestbuy.com/v1/products"
    let formattedKeyword = formatKeyword(keyword)
    let apiKey = "?apiKey=bkFXAolb3phZVMGX1yhl6uDQ"
    let sortOptions = "&sort=customerReviewCount.dsc"
    let showOptions = "&show=name,regularPrice,shortDescription,thumbnailImage,url,customerReviewCount"
    let responseFormat = "&format=json"
    let url = baseURL+formattedKeyword+apiKey+sortOptions+showOptions+responseFormat
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
                    console.log("ERROR! : "+err)
                    return resolve();
                }
            });
        }).on("error", (e) => {
            return resolve();
        });
    });
}

function formatKeyword(keyword) {
    return "((search="+keyword.replace(/\s+/g, '&search=')+"))"
}

