import React, { Component } from 'react'
import Context from '../utils'
import GrandSon from './grandSon'

export class child extends Component {
  render() {
    return (
      <div>
          <Context.Consumer>
            {
                (value) => {
                    return <div>{value.child.text}</div>
                }
            }
          </Context.Consumer>
          <GrandSon></GrandSon>
      </div>
    )
  }
}

export default child
