const options = {
  method: 'GET',
  headers: {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'User-Agent': 'EchoapiRuntime/1.1.0',
    Connection: 'keep-alive'
  }
};

fetch('https://dummyjson.com/products?limit=12', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    console.log(response.products[0].id)
    console.log(response.products[0].images[0])
    console.log(response.products[0].title)
    console.log(response.products[0].price)
    const productsElement = document.getElementById("product")
    response.products.forEach(product => {
      console.log(product.title)
      const productElemnt = document.createElement("div")
      productElemnt.setAttribute("class","card")
      productElemnt.innerHTML = `
      <div class="nama">${product.title}</div>
      <div><img src="${product.images[0]}"/></div>
      <div class="harga">${product.price}</div>
      <div class="link"><a href="detail/?id=${product.id}">
            <span>Selengkapnya</span>
        </a>`
      productsElement.appendChild(productElemnt)
    });})
  .catch(err => console.error(err));