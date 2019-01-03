import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    fileImageBase64: ''
  }

  myFunction = e => {
    let files = e.target.files;
    let file = files[0];

    let reader = new FileReader();
    reader.onload = readerEvt => {
      let binString = readerEvt.target.result;
      console.log(btoa(binString));
      document.getElementById("base64textarea").value = btoa(binString);
    };
    reader.readAsBinaryString(file);
  };

  handleImage = (e) => {
    this.setState({fileImageBase64: e.target.value})
  }

  render() {
    const imageBase64 = "base64, " + this.state.fileImageBase64;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Input File</h3>

          <input type="file" onChange={this.myFunction.bind(this)} />
          <h1>Base64 encoded version</h1>
          <textarea
            id="base64textarea"
            placeholder="Base64 will appear here"
            cols="50"
            rows="15"
          />
          <br/>
          <h3>Base64 Decode Image version</h3>
          <textarea
            id="base64decodetextarea"
            placeholder="Put Image Base64 string here"
            cols="50"
            rows="15"
            onChange={this.handleImage}
            value={this.state.fileImageBase64}
          />
          <h3>Image Result</h3>
          <img src={"data:image/jpeg;" + imageBase64} />
        </header>
      </div>
    );
  }
}

export default App;
