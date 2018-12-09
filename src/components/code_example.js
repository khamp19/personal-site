import React, { Component } from 'react';
import './codeExample.css'

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

class CodeExample extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            backgroundColor: {
                backgroundColor: "whitesmoke",
                color: "black",
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
                color: "black",
            }
        });
    };

    render () {
        return (
            <div className="example">
                <h3>An Interactive React Element</h3>
                <p>I built a React element that counts to 100, turns blue 
                    when the counter is a prime number, turns green when the counter has a remainder of 3 when divided
                    by 5, and turns into a circle when the count is a multiple of 10.
                </p>
                <div className="exampleCode">
                    <div className="counter" style={this.state.backgroundColor}>
                        <h2>{this.state.count}</h2>
                        <button onClick={this.addCount}>Click Me!</button>
                        <button onClick={this.resetCount}>Reset</button>
                    </div>
                </div>
            </div>   
        )
    }
}

export default CodeExample;