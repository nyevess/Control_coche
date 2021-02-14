//recogemos el coche en variable
const coche = document.getElementById('coche')

//creamos las variables x e y para poder mover el coche cuando pulsemos
//las teclas de dirección
let x = 0, y = 0

//creamos las funciones para las teclas, subir, derecha, izquierda y bajar
down = () => coche.style.transform = `translate(${x}%, ${y += 10}%)`
up = () => coche.style.transform = `translate(${x}%, ${y -= 10}%)`
left = () => coche.style.transform = `translate(${x -=10}%, ${y}%)`
right = () => coche.style.transform = `translate(${x += 10}%, ${y}%)`

//dependiendo de la tecla que pulsemos hará una acción o la otra
document.addEventListener('keyup', evento => {
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowRight':
            right()
            break
        case 'ArrowLeft':
            left()
            break
    }
})

//creamos la variable general para introducir luego la meta en el div general
const general = document.getElementById('general')

//escuchamos el evento scroll
addEventListener('scroll', () =>{
    //si el scroll lega a 500 nos mostrara el carte de meta 500
        if(scrollY = 500){
            const llegar = document.createElement('div')
            llegar.textContent = 'Meta 500'
            llegar.style.width = '150px'
            llegar.style.height = '50px'
            llegar.style.borderRadius = '10px'
            llegar.style.color = "white"
            llegar.style.display = 'flex'
            llegar.style.justifyContent = 'center'
            llegar.style.border = '5px solid pink'
            llegar.style.fontSize= '2rem'
            llegar.style.background = 'purple'
            llegar.style.position = 'absolute'
            llegar.style.top = '500px'
            llegar.style.left = '20px'
            general.appendChild(llegar)
        }

        //Si el scroll lega a 1000 nos mostrara el cartel de meta 1000
        if (scrollY = 1000){
            const llegar1 = document.createElement('div')
            llegar1.textContent = "meta 1000"
            llegar1.style.width = "150px"
            llegar1.style.height = "50px"
            llegar1.style.borderRadius = "10px"
            llegar1.style.display = 'flex'
            llegar1.style.color = "white"
            llegar1.style.justifyContent = 'center'
            llegar1.style.border = '5px solid pink'
            llegar1.style.fontSize= '2rem'
            llegar1.style.background = 'purple'
            llegar1.style.position = 'absolute'
          llegar1.style.top = '1000px'
          llegar1.style.left = '20px'
          general.appendChild(llegar1)
        
        }

        //si el scroll lega a 1500 mostrara cartel de meta 1500
        if (scrollY = 1000){
           const llegar2 = document.createElement('div') 
            llegar2.textContent = "meta 1500"
            llegar2.style.width = "150px"
            llegar2.style.height = "50px"
            llegar2.style.borderRadius = "10px"
            llegar2.style.display = 'flex'
            llegar2.style.color = "white"
            llegar2.style.justifyContent = 'center'
            llegar2.style.border = '5px solid pink'
            llegar2.style.fontSize= '2rem'
            llegar2.style.background = 'purple'
            llegar2.style.position = 'absolute'
          llegar2.style.top = '1500px'
          llegar2.style.left = '20px'
          general.appendChild(llegar2)
        
        }
    }) 


           

        

