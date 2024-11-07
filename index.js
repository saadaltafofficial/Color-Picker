let colors = []
const allColors = document.getElementById('all-colors')

fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5")
.then(res => res.json())
.then(data => {
    console.log(data)
    colors = data.colors
    colors.forEach((col) => {
        allColors.innerHTML += `<div>${col.hex.value}</div>`
    })
})
