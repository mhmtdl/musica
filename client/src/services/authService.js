import axios from 'axios'


class AuthService {
    constructor(){
        let service = axios.create({
            baseURL:process.env.REACT_APP_SERVER_URL,
            withCredentials:true
        })
        this.service = service
    }


    signup = (username,email,password)=> {
        return this.service.post('/auth/signup',{username,email,password})
        .then(response=>response.data)
    }

    login = (username,email,password)=>{
        return this.service.post('/auth/login',{username,email,password})
        .then(response=>response.data)
    }

    edit = (username,email)=> {
        return this.service.put('/auth/edit',{username,email})
        .then(response => response.data)

    }

    loggedin = () => {
        return this.service.get('/auth/loggedin')
        .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/auth/logout')
        .then(response=> response.data)
    }

  
}






export default AuthService