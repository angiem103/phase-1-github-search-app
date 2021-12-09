document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector("#github-form");
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let search = e.target.search.value
        //console.log(search)
        handleSearch(search)
    
function handleSearch() {
    fetch('https://api.github.com/search/users?q=' + search, {
        method: 'GET',
        header:{
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {console.log(data)
  
        data.items.forEach(user => console.log(user))
        //console.log(data.items[0].login)
    })
    

  // ul = document.getElementById('user-list')
  // li = document.createElement('li')
   //li.innerHTML = {
   //    'username' : `${data.items.login}`
  // }
   //ul.appendChild(li)
}
})
})
    
