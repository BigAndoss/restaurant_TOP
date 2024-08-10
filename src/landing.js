const landing = () =>{

    clear()
    
    const content = document.querySelector('#content');
    content.style.background = 'rgb(255, 128, 0)'    
    
    const body = document.createElement('div')
    body.setAttribute('class',"body")
    
    const img = document.createElement('img')
    img.classList.add('roundImg')
    img.setAttribute('src',"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg")
    
    const info = document.createElement('div')
    info.classList.add('info')
    
    const wlc = document.createElement('h2')
    const infoTxt = document.createElement('p')
    wlc.innerText = "Welcome to our Restaurant"
    infoTxt.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque similique voluptatem aliquid reiciendis inventore dignissimos labore, exercitationem, impedit quidem ullam eveniet a. Assumenda quas dolorum, culpa magnam suscipit repellat laboriosam."
    
    const footer = document.createElement('footer')
    const fH2 = document.createElement('h2')
    const fH4 = document.createElement('h4')
    
    fH2.textContent = "My Pizza Restaurant"
    fH4.textContent = "PizzaRestourant@email.com"
    
    
    footer.appendChild(fH2)
    footer.appendChild(fH4)
    info.appendChild(wlc)
    info.appendChild(infoTxt)
    body.appendChild(img)
    body.appendChild(info)
    content.appendChild(body)
    content.appendChild(footer)
    
}

const meny = () =>{
    
    const content = document.querySelector('#content')
    content.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Pizza-oven.jpg/525px-Pizza-oven.jpg')";
    content.style.backgroundRepeat = 'no-repeat'
    content.style.backgroundSize = 'cover'

    const conMenu = document.createElement('div')
    conMenu.classList.add('menu')

    const menuIng = document.createElement('img')
    menuIng.setAttribute('src','https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg')
    menuIng.classList.add('foodImg')

    const desc = document.createElement('div')
    desc.classList.add('desc')

    const descName = document.createElement('h1')
    descName.textContent = 'Pizza Pepperoni'
    const descIng = document.createElement('h6')
    descIng.textContent = 'Chesse, Souce, Pepperoni'
    const price = document.createElement('p')
    price.textContent = '4$'

    desc.append(descName,descIng,price)
    conMenu.append(menuIng,desc)
    content.appendChild(conMenu)
}

const clear = () =>{
    const content = document.querySelector('#content')
    content.innerHTML = ''
}
const contacts = () =>{
    clear()
    const content = document.querySelector('#content')
    content.style.background = 'rgb(255, 128, 0)'  

    const body = document.createElement('div')
    body.setAttribute('class','body')
    const link = document.createElement('a')
    const gitLink = document.createElement('h1')
    gitLink.textContent = "My GitHub link page"

    link.appendChild(gitLink)
    link.href = "https://github.com/BigAndoss"
    body.appendChild(link)
    content.appendChild(body)
}
// const Menu = document.querySelector('#Menu')
// Menu.addEventListener('click',menu)

export {landing, meny, clear, contacts};