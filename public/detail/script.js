const params = new URLSearchParams(location.search)
        const id = params.get('id')
let peasan 
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
      <div>Harga: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>${response.price}</div>
      <di>Rating: ${response.rating}
    `
    pesan = response;
    details.appendChild(detail)
})
  .catch(err => console.error(err));