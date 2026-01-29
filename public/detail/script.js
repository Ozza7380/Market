const params = new URLSearchParams(location.search)
        const id = params.get('id')
console.log(id)
const details = document.getElementById("detail")
fetch(`https://dummyjson.com/products/${id}`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
     console.log(response.title)
    console.log(response.images[0])
    console.log(response.description)
    console.log(response.price)
    console.log("wa sesuai")
    const massage = ` Halo Admin 
    saya ingin memesan product:${response.title}
    Dengan alamat:
    terimakasih.`;
    console.log("peasan:", massage)
    const endcodeMassage = encodeURIComponent(massage);
    console.log("encoded:", endcodeMassage)
    const waUrl = `https://wa.me/6285747798750?text=${endcodeMassage}`;
    console.log('whatsapp url:', waUrl)
    const detail = document.createElement("div")
    detail.setAttribute("class","card")
    detail.innerHTML = `
    <div class="nama">Nama: ${response.title}</div>
      <div class="img"><img src="${response.images[0]}"/></div>
      <div>Keterangan: ${response.description}</div>
      <div>Harga: ${response.price}</div>
      <di>Rating: ${response.rating}
      <div><a href="${waUrl}">
            <span>Selengkapnya</span>
        </a>

    `
    details.appendChild(detail)
})
  .catch(err => console.error(err));