import { useCookies } from 'react-cookie'
export default class APIService {

    static userLogin (body) {
    return fetch('http://127.0.0.1:8000/auth/', {
        'method': 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(body)
    })
    .then(resp => resp.json())
    .catch(error => error)
}
    static Signup (body){
        return fetch('http://localhost:8000/users/', {
            'method': 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static GetTasks(token){
        return fetch('http://localhost:8000/tasks/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => resp.json())
        .then(data => data)
        .catch(error => error)
      }
      static PostTask (body){
        return fetch('http://localhost:8000/tasks/', {
            'method': 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static ChangeTask (state, number){
        return fetch(`http://localhost:8000/tasks/${number}`,{
            'method': 'PUT',
            headers : {
                'Content-Type': 'application/json',
            },
            state:JSON.stringify(state)
        }).then(resp => resp)
    }
    static DeleteTask (number){
        return fetch(`http://localhost:8000/tasks/${number}`,{
            'method': 'DELETE',
            headers : {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp)
    }
}
