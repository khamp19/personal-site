import React, { Component } from 'react';
import './codeExample.css'


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const colorList = [];

class CodeExample extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            backgroundColor: {
                backgroundColor: "whitesmoke"
            },
            scrollColor: {
                backgroundColor: "whitesmoke"
            }
        };
    }

    addCount = () => {
        if (this.state.count < 100) {
            this.setState({ count: (this.state.count += 1) });
        }
        if (primes.includes(this.state.count)) {
            this.setState({
                backgroundColor: {
                    backgroundColor: "blue",
                    color: "white"
                }
            });
        } else if (this.state.count > 1 && this.state.count % 10 === 0) {
            this.setState({
                backgroundColor: {
                    boxShadow: "10px 5px steelblue",
                    width: "200px",
                    borderRadius: "50%"
                }
            });
        } else if (this.state.count % 5 === 3) {
            this.setState({
                backgroundColor: {
                    backgroundColor: "green",
                    color: "white"
                }
            });
        } else {
            this.setState({
                backgroundColor: {
                    backgroundColor: "whitesmoke",
                    color: "black"
                }
            });
        }
    };

    resetCount = () => {
        this.setState({
            count: 0,
            backgroundColor: {
                backgroundColor: "whitesmoke",
                width: "auto"
            }
        });
    };
    
    addToBackground = () => {
        colorList.push(this.state.backgroundColor);
    };

    displayColors = () => {
        if (colorList.length > 0) {
            for (let i = 0; i < colorList.length; i++) {
                this.state.scrollColor = colorList[i];
                this.setState({ scrollColor: this.state.scrollColor });
            }
        }
    };

    // resetScrollColor

    render () {
        return (
            <div className="example">
                <h3>Here's a code example</h3>
                <p>Here's a description of the code</p>
                <div className="exampleCode">
                    {/*<h1>Hello College Vine</h1>*/}
                    <div className="counter" style={this.state.backgroundColor}>
                        <h2>{this.state.count}</h2>
                        <button onClick={() => {this.addCount(); this.addToBackground();}}>Click Me!</button>
                        <button onClick={this.resetCount}>Reset</button>
                    </div>
                    <div className="bonus" style={this.state.scrollColor}>
                        <p>display scrolling colors here</p>
                        <button onClick={this.displayColors}>Click me!</button>
                        {/*<button onClick={this.resetScrollColor}>Reset</button>*/}
                    </div>
                </div>
            </div>   
        )
    }
}

export default CodeExample;







//     render() {
//         return (
            

// render(<App />, document.getElementById("root"));
