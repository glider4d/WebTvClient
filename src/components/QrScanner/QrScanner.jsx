import React from "react";
import { Html5Qrcode } from "html5-qrcode"
import "./QrScanner.css"

class QrScanner extends React.Component {
    constructor(props){
        super(props)


        this.state = {
            Html5QrCode: null,
            config: null,
            decodedText: '',
            enabled: false
        }

        
 
        // this.initHtml5QrCode = this.initHtml5QrCode.bind(this)
        // this.qrScanerStop = this.qrScanerStop.bind(this)
        // this.qrCodeSuccess = this.qrCodeSuccess.bind(this)
        
    }

    initHtml5QrCode(){
        const config_ = {fps: 10, qrbox: {width: 200, height: 200}}
        const Html5QrCode_ = new Html5Qrcode("qrCodeContainer")


        Html5QrCode_.start({facingMode: "environment"}, config_, this.qrCodeSuccess)
        this.setState({Html5QrCode: Html5QrCode_})
        this.setState({config: config_})
    }

    

    qrScanerStop(){
        if (this.state.Html5QrCode && this.state.Html5QrCode.isScanning){
            this.state.Html5QrCode.stop()
            .then(() => console.log("Scanner stop"))
            .catch(() => {console.log("Scanner error")})
          }

    }

    qrCodeSuccess(decodedTxt){
        console.log('qrCodeSuccess')
        this.qrScanerStop()
        this.setState({decodedText: decodedTxt})
        this.setState({enabled: false})
    }


    componentDidMount(){
        this.initHtml5QrCode()
    }
    componentWillUnmount(){
        this.qrScanerStop()
    }
    render(){
        // return (<></>)
        return (
            <div className="scanner">
                <div className="scanner_wnd">
                {/* <i class="bx bx-right-arrow"></i>

                <i class="bx bx-right-arrow"></i> */}
                    <i className="bx bx-x close-qr" onClick={() => {this.props.onQrScanner()}}></i>
                    {/* <h1 onClick={() => {alert('onClick')}}>X</h1>         */}
                    <div id='qrCodeContainer'></div>
                </div>
            {this.state.qrMessage  && <div className="qr-message">{this.state.qrMessage}</div>}
          </div>
        )
    }
}

export default QrScanner