
document.getElementById('todaysPhoto').addEventListener('click', apod)
document.getElementById('searchByDate').addEventListener('click', searchThisDate)
document.getElementById('clear').addEventListener('click', clear)

function clear(){
  location.reload()
}



function apod(){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=MJMohrilYo9GS6xaifZnU7PBJWZBE0GcRHlyr153`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('title').innerText = data.title
        document.getElementById('date').innerText = data.date
        var spacePic = document.createElement('img')
        spacePic.src = data.hdurl
        document.getElementById('picture').appendChild(spacePic)
        document.getElementById('explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

} 

function searchThisDate(){
 
  const choice = document.querySelector('input').value
 
  fetch(`https://api.nasa.gov/planetary/apod?api_key=MJMohrilYo9GS6xaifZnU7PBJWZBE0GcRHlyr153&date=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('title').innerText = data.title
        document.getElementById('date').innerText = data.date
        var spacePic = document.createElement('img')
        spacePic.src = data.hdurl
        document.getElementById('picture').appendChild(spacePic)
        document.getElementById('explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

} 
  



