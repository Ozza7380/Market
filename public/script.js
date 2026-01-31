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
      <div class="gambar"><img src="${product.images[0]}"/></div>
      <div class="harga"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>${product.price}</div>
      <div class="link"><a href="detail/?id=${product.id}">
            <span>Selengkapnya</span>
        </a>`
      productsElement.appendChild(productElemnt)
    });})
  .catch(err => console.error(err));