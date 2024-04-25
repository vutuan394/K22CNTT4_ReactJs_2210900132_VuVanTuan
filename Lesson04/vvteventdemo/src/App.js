import React, { Component } from 'react'
import VVT_eventfrom1 from './component/VVT_eventfrom1'
import VVT_eventfrom2 from './component/VVT_eventfrom2'
import VVT_eventfrom3 from './component/VVT_eventfrom3'
import VVT_eventfrom4 from './component/VVT_eventfrom4'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Event Form Demo</h1>
        <VVT_eventfrom1 />
        <VVT_eventfrom2 />
        <VVT_eventfrom3 />
        <VVT_eventfrom4 name="Vũ Văn Tuấn" />
      </div>
    )
  }
}
