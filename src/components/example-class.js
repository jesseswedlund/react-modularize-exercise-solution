import React from 'react'

class ExampleClass extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          greeting: true
      }

      this.toggleGreeting = this.toggleGreeting.bind(this)
  }

  toggleGreeting() {
      this.setState({ greeting: !this.state.greeting })
  }

  render(){
      return (
          <div>
              <div className="greeting">
                  <p>{this.state.greeting ? this.props.greeting1 : this.props.greeting2}</p>
                  <button type="button" onClick={this.toggleGreeting}>Toggle Greeting</button>
              </div>
          </div>
      )
  }
}

export default ExampleClass