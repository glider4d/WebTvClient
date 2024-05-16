import React from "react";
import './LoginForm.css'
import Spinner from '../Spinner/Spinner';
import { QRCodeSVG } from "qrcode.react";

class LoginForm extends React.Component {
    // user_name = ''
    // tokenKey = ''
    // isCheck = ''

    storageParams = {
        user_name : 'username',
        tokenKey : 'accessToken',
        isCheck : false
    }

    // isAuth = false;

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            isCheck: false,
            wrongPassword: false,

            storage_user_name: '',
            storage_tokenkey: '',
            sotrage_ischeck: '',
            isAuth: false,
            isBusy: true
        }

        
        this.checkAuth = this.checkAuth.bind(this)
        this.loadStorage = this.loadStorage.bind(this)
        this.initialize = this.initialize.bind(this)
        this.auth = this.auth.bind(this)
        
         

        this.initialize()
    }

    initialize(){
        return null != this.loadStorage()
    }

    componentDidMount(){
        this.checkAuth()
    }

    

    loadStorage(){
        let user_name_r = sessionStorage.getItem(this.storageParams.user_name)
        let token_key_r = sessionStorage.getItem(this.storageParams.tokenKey)
        this.state.username = user_name_r?user_name_r:""
        let isCheck = sessionStorage.getItem(this.storageParams.isCheck)
        
        if (user_name_r) this.state.storage_user_name = user_name_r
        if (token_key_r) this.state.storage_tokenkey = token_key_r

        return user_name_r != null
    }

    checkAuth(){

        let check =  fetch("http://192.168.0.12:5122/api/Auth/CheckAuth", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + this.state.storage_tokenkey  // передача токена в заголовке
            }
        }).then(response => {
            let result = response.status == 200
            this.setState({isAuth: result})      
            this.props.onAuth(result, this.state.storage_tokenkey)
        }).catch(e => {
            this.setState({isAuth: false})
        }).finally(()=>{
            this.setState({isBusy: false})        
        });
    }
// https://192.168.0.12:7238/swagger/index.html
    auth(user, pass){
        // fetch("https://192.168.0.12:7238/api/Auth/login",
        // http://192.168.0.12:5122/
        fetch("http://192.168.0.12:5122/api/Auth/login", 
        {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }).then(response => {
            if ( response.ok){
                response.json().then(data => {
                    this.isAuth = true;
                    sessionStorage.setItem(this.storageParams.user_name, data.username)
                    sessionStorage.setItem(this.storageParams.tokenKey, data.access_token)
                    this.setState({storage_user_name: data.username})
                    this.setState({storage_tokenkey: data.access_token})
                    this.setState({isAuth : true})
                    this.setState({wrongPassword: false}) 
                    this.props.onAuth(true, data.access_token)
                })
            } else {
                this.setState({storage_user_name: ""})
                this.setState({storage_tokenkey: ""})

                this.setState({isAuth : false})
                this.setState({wrongPassword: true})
            }
        }).catch(e => {
            this.setState({wrongPassword: true})
            console.log(`e = ${e}`)
        }).finally( (e) => {
            this.setState({isBusy: false})
        });

    }

    render() {

        if (this.state.isBusy)
            return (<div className="wrapper"><Spinner/></div>)
        return (
            <div className="wrapper">
                <div className="wrapper__into">
                    <form className="login__form" action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" value = {this.state.username} onChange={(e) => {this.setState({username: e.target.value})}} required/>
                            <i className="fa-solid fa-user icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" value = {this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} required/>
                            <i className="fa-solid fa-lock icon"></i>
                        </div>
                        <div className="remember-forgot">
                            {/* <label htmlFor=""><input type="checkbox" name="" id="" /> Remember me</label> */}
                            <a href="#">Forgot password?</a>
                        </div>
                        {
                            
                        this.state.wrongPassword &&
                            <div className="wrongpassword-message">
                                Wrong password
                            </div>
                        }
                        <button type="button" onClick={()=>{
                            this.setState({isBusy: true})
                            this.auth(this.state.username, this.state.password)
                        }}>Login</button>
                        <div className="register-link">
                            <p>Don't have an account?<a href="#">Register</a></p>
                        </div>
                        <div className="register-qr">
                            
                            <p className="register-qr--title">or scan qrcode</p>
                            <QRCodeSVG value="Здравствуйте товарищи" 
                            size = "256"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default LoginForm