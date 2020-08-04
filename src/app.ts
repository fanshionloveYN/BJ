import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount () {
    var obj = document.getElementById("app");
    obj.firstElementChild.id = "bigDiv"
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
