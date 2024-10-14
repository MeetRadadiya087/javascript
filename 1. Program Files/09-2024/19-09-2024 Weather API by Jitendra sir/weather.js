async function fetchApi() {

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)

    document.getElementsByClassName('main')


    data.map((el, i) => {
        const box = document.createElement('div')
        box.setAttribute('id', 'box')
        const id = document.createElement('p')
        const name = document.createElement('h3')
        name.setAttribute('id', 'name')
        const price = document.createElement('p')
        price.setAttribute('id', 'price')
        const rating = document.createElement('span')
        rating.setAttribute('id', 'rating')
        const color = document.createElement('b')
        color.setAttribute('id', 'color')
        const img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.setAttribute('src', el.image)

        id.innerHTML = i + 1
        name.innerHTML = el.title
        price.innerHTML = el.price
        rating.innerHTML = el.rating
        box.append(img, name, price, rating, color)
        document.querySelector('#main').append(box)
    })

}

fetchApi()
