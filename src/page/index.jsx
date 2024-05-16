import React from "react";
import './index.css'
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
// import PopularContainer from "../components/SliderContainer/SliderContainer";
import SliderContainer from "../components/SliderContainer/SliderContainer";
import MoviesContainer from "../components/MoviesContainer/MoviesContainer";
import QrScanner from "../components/QrScanner/QrScanner";


class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            QrScannerEnabled: false
        }

        this.onQrScanner = this.onQrScanner.bind(this)
    }

    onQrScanner(){
        this.setState({QrScannerEnabled:!this.state.QrScannerEnabled})
    }
    render() {
        if (this.state.QrScannerEnabled){
            return (<QrScanner onQrScanner={this.onQrScanner} />)
        }
        return (
            <>
                <Header onQrScanner={this.onQrScanner}></Header>
                <Main></Main>
                <Footer></Footer>
                <SliderContainer/>
                <MoviesContainer/>
                {/* <SliderContainer onRoute={this.state.onRoute}/>
                <MoviesContainer onRoute={this.state.onRoute}/> */}
            </>
        )
    
    }
}

export default Index