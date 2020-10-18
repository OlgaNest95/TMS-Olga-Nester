const form=document.getElementById('form')
const tableBody=document.getElementById('tbody')
const tableHead=document.querySelector('thead')
const table=document.getElementById('tableData')
const input = document.getElementById('input')
const clearButton = document.getElementById('clear')
const findButton= form.elements[1]
const inputArea= form.elements[0]
table.style.display='none'
const map = new Map()

form.addEventListener('submit', event=>{
    event.preventDefault()

    getWeather(input.value).then((response)=>{
      const {
        current:{temperature},
        location:{country,name}
      } = response
      map.set(name,[name,country,temperature])
      renderTableRow()
})    
});

function getWeather(city){
  return fetch(`http://api.weatherstack.com/current?access_key=72a7d8a30ce91e8b0fd8ccc58e4ce775&query=${city}`)
  .then(response=>response.json())
}
  

function renderTableRow(){
 table.style.display=''
 let tBody = ''
 map.forEach((value,key)=>{
    const [city,country,temperature]=value
    tBody+=`  
    <tr>
      <td>${city}</td>
      <td>${country}</td>
      <td>${temperature}</td>
      <td>${temperature}</td>
    </tr>`
  })
  
   tableBody.innerHTML=tBody
}

clearButton.addEventListener('click',()=>{
  map.clear()
  renderTableRow()  
  table.style.display='none'
}
)
