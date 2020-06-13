import React, { Component } from 'react'
import './App.css';
import Context from './utils'
import Child from './components/child'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                child: {
                    text: '我是子组件'
                },
                grandSon: {
                    text: '我是跨级组件'
                }
            }
        }
    }
    render() {
        return (
            <div className="App">
                我是父组件
                <Context.Provider value={this.state.data}>
                    <Child></Child>
                </Context.Provider>
        </div>
        )
    }
}

export default App
