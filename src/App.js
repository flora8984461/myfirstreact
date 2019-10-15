import React from 'react';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </header>
    </div>
  );
} */


class List extends React.Component {

  render() {
    return (
        <ul>
            {
                    this.props.data.map( (item, index) => {
                        return (
                            <li key={index}>
                                <p className={item.vip ? "vip" : ""}>{item.username}</p>
                                <p className="message">{item.message}</p>
                            </li>
                        )
                    } )

            }

        </ul>

    )
  }

}

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

  render() {
    return (
        <div onClick={(e)=>this.togglePanel(e)}>
          <h2 className="title">{this.props.data.name}</h2>
            {this.state.open?(<List data={this.props.data.list} />):
                <h2 className="title"></h2>
            }
        </div>
    )
  }

}

class Panel extends React.Component {
  render() {
    return (
        <div className="panel">
            {
                Object.keys(this.props.data).map((key, index) => {
                    return <Group key={index} data={this.props.data[key]}/>
                })
            }
     </div>
    )
  }

}

/*
class PanelCollap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div onClick={(e)=>this.togglePanel(e)} className="panel">
                {
                    this.state.open?(
                        <div className="panel">
                            {
                                Object.keys(this.props.data).map((key, index) => {
                                    return <Group key={index} data={this.props.data[key]}/>
                                })
                            }
                        </div>
                    ):<div className="PanelHide"></div>
                }
            </div>
        )
    }
} */

export default Panel;
