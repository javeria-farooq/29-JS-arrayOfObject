/*///////// array of objects (array k undr obj) */

/*let siblings = [
    {name : "javeria", age: 20},
    {name : "aliza", age : 17},
    {name : "afnan", age : 10}
]
//we print array, it's object, and it's key
console.log(siblings)
console.log(siblings[0])
console.log(siblings[0].name)

//now we print each object in the array

console.log(`now we print each object in the array`)
for(let i = 0; i < siblings.length; i++) {
    console.log(i, siblings[i])
}

//now we print each object with each property

console.log(`now we print each object with each property`)

for(let i = 0; i < siblings.length; i++) {
    console.log(`${i}:`)
    for(let key in siblings[i]) {
        console.log(`${key} : ${siblings[i][key]}`)
    }
}*/

/*ab hm bnaenge array of objects yni k objects ka ek array jske undr itne saare obj hnge*/

let arrOfObj = [
    {
        id : '01',
        name : 'infinix',
        imageUrl : 'https://propakistani.pk/price/wp-content/uploads/2022/05/Infinix-Note-12-G96-price-in-Pakistan-200x300.png',
        price : '30,000'
    }, 

    {
        id : '02',
        name : 'infinix note 2',
        imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXSexQtb3V7jC7VMKyIupW3vidAZxy-ujUA&usqp=CAU',
        price : '400,000' 
    }, 

    {
        id : '03',
        name : 'infinix note 12',
        imageUrl : 'https://fdn.gsmarena.com/imgroot/news/23/05/infinix-note-30i-ofic/inline/-1200/gsmarena_001.jpg',
        price : '50,000'
    }
]

/*console.log(arrOfObj)
console.log(arrOfObj[0])
console.log(arrOfObj[1])
console.log(arrOfObj[2])

console.log(arrOfObj[0].name)
console.log(arrOfObj[0].imageUrl)*/

//with the help of loop

for(let i = 0; i < arrOfObj.length; i++) {
    console.log(i)
    for(let key in arrOfObj[i]) {
        console.log(key, ":", arrOfObj[i][key])
    }
}

//now we access object in our DOM page and developed a simple program

/*let image = document.querySelector(".img")
image.setAttribute("src", arrOfObj[0].imageUrl)*/