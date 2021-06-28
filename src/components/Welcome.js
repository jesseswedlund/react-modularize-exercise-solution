import ExampleClass from "./example-class"

const Welcome = () => {
    return (
        <div id="welcome-section" className="intro">
        <h1>Hey, I'm Emisha</h1>
        <p>A web developer</p>
        <ExampleClass greeting1="Hello!" greeting2="What's Up?"/>
      </div>
    )
}

export default Welcome