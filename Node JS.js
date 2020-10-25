const request= require("request-promise")
const cheerio= require("cheerio");

request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);

        const datarow= $(".HeaderRow");
        const output= datarow.find("th").text();
        $(".DataRow").each((i, data) => {
            const item= $(data).text();
            const item1= $(data).text();
            const item2= $(data).text();

            console.log(item, item1, item2);
        })
    }

});
