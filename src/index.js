import   axios   from 'axios';
import cheerio from 'cheerio';



const getProductUrl = (productId) => `hhttps://www.yeezysupply.com/api/products/${productId}`;
async function getElements (productId)  {
  const productUrl = getProductUrl(productId);
  const  { data }  = await axios(productUrl,{
    Headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }

  })
  console.log(data.product_description)
 
}
getElements('GW9524')