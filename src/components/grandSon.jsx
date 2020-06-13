import React, { Component } from 'react'
import Context from '../utils'

export class grandSon extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
            {
                (value) => {
                    return <div>{value.grandSon.text}</div>
                }
            }
          </Context.Consumer>
      </div>
    )
  }
}

export default grandSon
