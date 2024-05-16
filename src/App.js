import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Spinner from './components/Spinner/Spinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Main from './components/Main/Main';
import Index from './page/index';
import Playpage from './page/playpage';

class App extends React.Component {
  pages = ["index", "play-page", "login"];

  
  
  constructor(props){
    super(props)
    this.state = {
      isBusy : true,
      isAuth : false,
      signalRStart: false,
      hubConnection : {},
      page: "",
    }


    this.onAuth = this.onAuth.bind(this)
    this.onRoute = this.onRoute.bind(this)
    // let signalRConnection = window.getSignalRConnection()
    let axios = window.getAxios()

    // let router = window.getRouter();
    // let route = window.getRoute();
    // let routes = window.getRoutes();
    
  }

  componentDidMount = () => {

  }

  render (){
    console.log(`state.page = ${this.state.page}`)
    if (!this.state.isAuth)
      return (
        <div className="App">
          <LoginForm onAuth={this.onAuth}/>
        </div>
      )
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='index' element={<Index />}/>
          <Route path='playpage' element={<Playpage />}/>
        </Routes>
      </BrowserRouter>
    )
    // switch(this.state.page){  
    // case 'play-page':
    //     return (
    //       <></>
    //     )
    //     break
    // case 'index':
    // default:  return (
    //       <div className='App'>
    //         <Index onRoute={this.onRoute}/>
    //       </div>
        // )
    // }
    // return (<div className='App'><h1>Auth success</h1></div>)    
  }

  onRoute(pageName){
    console.log(`onRoute in ${pageName}`)
    this.setState({page: pageName})
  }

  onAuth(isAuthFlag, token){
    this.setState({isAuth: isAuthFlag})
    if (isAuthFlag && token != null){
      this.signalRInit(token)
    }
  }

  signalRInit(token){
    let hubConnection = window.getSignalRConnection(token)
    // hubConnection.logout().then(() => {console.log('logout')})
    this.state.hubConnection = hubConnection


    hubConnection.on("ReceiveMessage", function (user, data) {
      // console.log(data)
    });

    
    hubConnection.on("Timer", (data) => {
      console.log(data); //Server time
    });

    hubConnection.on("ReceiveRandomNumber", (data) => {
        // console.log(`ReceiveRandomNumber ${data}`);
    });

    hubConnection.on("AddMessageToChat2", (data, time) => {
        // console.log(`timer data = ${data}, ${time}`);
    });

    hubConnection.start().then(() => {
        // console.log('start')
    })
  }

  // onBusy(busy){
  //   this.setState({isBusy: busy })
  // }
}



export default App;
