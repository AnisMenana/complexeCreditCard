import React, { Component } from "react";
import "./creditCard.css";
import Puce from "./image/puce-de-carte-de-crédit-98410918.jpg";
import Visa from "./image/mastercard.jpg";

class credit extends Component {
  constructor() {
    super();
    this.state = {
      userserial: "",
      userdate: "",
      username: ""
    };
  }

  onChangeserial = event => {
    if (/^[0-9]*$/.test(event.target.value)) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };
  onChangedate = event => {
    let cardExpiry;
    if (/^[0-9]*$/.test(event.target.value)) {
      cardExpiry = event.target.value;
      console.log(cardExpiry);
    } else {
      cardExpiry = "";
    }
    if (cardExpiry.length < 2) {
      this.setState({
        userdate: cardExpiry
      });
    } else {
      if (cardExpiry.substr(0, 2) <= 12 && cardExpiry.substr(2, 4) >= 19) {
        this.setState({
          userdate: cardExpiry.substr(0, 2) + "/" + cardExpiry.substr(2, 4)
        });
      } else {
        alert("Month or Year invalid");
      }
    }
  };

  onChangename = event => {
    if (/^[a-zA-Z-]*$/.test(event.target.value)) {
      this.setState({
        username: event.target.value.toUpperCase()
      });
    }
  };
  cc_format = value => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  render() {
    return (
      <div>
        <div className="fond">
          <div className="creditcard">
            <h1>Credit Card</h1>
          </div>
          <div className="pucecard">
            <img className="puce" src={Puce} alt="" />
          </div>
          <div className="main">
            <div className="mainleft">
              <div className="SerialNumber">
                <div className="userserial1">
                  {this.cc_format(this.state.userserial)}
                </div>
              </div>
              <div className="number">
                <div className="mright1">
                  <div className="mright">
                    <div className="month">MONTH/YEAR</div>
                    <div className="day">
                      <div className="userdate1">{this.state.userdate}</div>
                    </div>
                  </div>
                  <div className="valid">
                    <div>VALID</div>
                    <div>THRU</div>
                  </div>
                </div>
                <div className="mleft">
                  <div className="num">5422</div>
                </div>
              </div>
              <div className="cardholder1">
                <div className="cardholder">
                  <div className="username1">{this.state.username}</div>
                </div>
              </div>
            </div>
            <div className="mainright">
              <img className="visa" src={Visa} alt="" />
            </div>
          </div>
        </div>
        <div>
          <form>
            <input
              type="text"
              maxLength="16"
              name="userserial"
              value={this.state.userserial}
              onChange={this.onChangeserial}
            />
            <input type="text" maxLength="4" onBlur={this.onChangedate} />
            <input
              type="text"
              maxLength="20"
              name="username"
              value={this.state.username}
              onChange={this.onChangename}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default credit;
