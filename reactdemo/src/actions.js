import Dispatcher from './dispatcher'

export function addCat(attributes){
  const params = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch('http://localhost:4000/add', params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        Dispatcher.dispatch({
        type: 'CREATE_CAT',
        person: body.person
        })
      })
    }
  })
}
