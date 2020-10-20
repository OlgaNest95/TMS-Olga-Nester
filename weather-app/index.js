const form=document.getElementById('form')
const tableBody=document.getElementById('tbody')
const tableHead=document.querySelector('thead')
const table=document.getElementById('tableData')
const input = document.getElementById('input')
const clearButton = document.getElementById('clear')
const mapView = document.getElementById('map')
const findButton= form.elements[1]
const inputArea= form.elements[0]
table.style.display='none'
const maparray = new Map()

form.addEventListener('submit', event=>{
    event.preventDefault()

    getWeather(input.value).then((response)=>{
      console.log(response)
      const {
        current:{temperature},
        location:{country,name,lat,lon}
      } = response
      maparray.set(name,[name,country,temperature,Number(lat),Number(lon)])
      console.log(maparray)
      renderTableRow()
     
      showOnMap(name)
      
})    
});

function getWeather(city){
  return fetch(`http://api.weatherstack.com/current?access_key=72a7d8a30ce91e8b0fd8ccc58e4ce775&query=${city}`)
  .then(response=>response.json())
}


function renderTableRow(){
 table.style.display=''
 let tBody = ''
 maparray.forEach((key,value)=>{
    const [city,country,temperature]=key
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
  maparray.clear()
  renderTableRow()  
  table.style.display='none'
  mapView.innerHTML=``

}
)
//разное всякое пробовала)))
//function getLocation(lat,lon){
//  return fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.a03eb095fc60dc9cace6db930098a2f6&lat=-37.870662&lon=144.9803321&format=json`)
//  .then(response=>response.json())
//  .then((response)=>console.log(response))
//}
//getLocation()
//const mapp = document.getElementById('map')
//function a(){

//return fetch(`<img src='https://maps.locationiq.com/v2/staticmap?key=pk.a03eb095fc60dc9cace6db930098a2f6&center=-37.870662,144.9803321&zoom=16&size=480x480&format=png&maptype=roadmap&markers=icon:large-red-cutout|-37.870662,144.9803321&markers=icon:large-red-cutout|-37.870662,144.9803321'>`)

///.then((response)=>{mapp.innerHTML=response})

//}
//a()
//return fetch(`https://maps.locationiq.com/v2/staticmap?key=pk.a03eb095fc60dc9cace6db930098a2f6&center=-37.870662,144.9803321&zoom=16&size=480x480&format=png&maptype=roadmap&markers=icon:large-red-cutout|-37.870662,144.9803321&markers=icon:large-red-cutout|-37.870662,144.9803321`)

function showOnMap (name){

  console.log(name)
 const [city,country,temperature,lat,lon]=maparray.get(name)
  console.log(lat)
  console.log(lon)
  var key = 'pk.a03eb095fc60dc9cace6db930098a2f6';
    // Add layers that we need to the map
    var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});

    // Initialize the map
    var map = L.map('map', {
        center: [lat,lon], // Map loads with this location as center
        zoom: 11,
        scrollWheelZoom: false,
        layers: [streets] // Show 'streets' by default
    });

    // Add the 'scale' control
    L.control.scale().addTo(map);

    // Add the 'layers' control
    L.control.layers({
        "Streets": streets
    }).addTo(map);

    // Add a 'marker'
    var marker = L.marker( [lat,lon], {draggable: true} )
        .addTo(map)
        .bindPopup(`Current LatLng(${lat},${lon})`)
        .openPopup();

    
    marker.on('dragend', function(event) {
    var position = marker.getLatLng();
    marker.setLatLng(position, {
      draggable: 'true'
    })  .bindPopup("You're now at " + position.toString())
        .openPopup();
    
        
})
console.log(lat)
}