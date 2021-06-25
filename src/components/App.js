import ExampleClass from "./example-class"
import ExampleFunc from "./example-functional";

function App() {
  return (
    <div classNameName="App">
      <nav>
        <ul id="navbar">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="welcome-section" className="intro">
        <h1>Hey, I'm Emisha</h1>
        <p>A web developer</p>
        <ExampleClass greeting1="Hello!" greeting2="What's Up?"/>
      </div>

      <div id="projects" className="work">
        <h2 className="work-header">These are some of my projects..</h2>

        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg1.png"
            alt="project"
          />
          <div className="project-title">Demo Project 1</div>
        </div>

        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg2.png"
            alt="project"
          />
          <div className="project-title">Demo Project 2</div>
        </div>
        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg3.png"
            alt="project"
          />
          <div className="project-title">Demo Project 3</div>
        </div>
        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg4.png"
            alt="project"
          />
          <div className="project-title">Demo Project 4</div>
        </div>
        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg5.png"
            alt="project"
          />
          <div className="project-title">Demo Project 5</div>
        </div>
        <div className="project project-tile">
          <img
            className="project-pic"
            src="images/projectbg6.png"
            alt="project"
          />
          <div className="project-title">Demo Project 6</div>
        </div>
        <div><a href="http://google.com">Show all</a></div>
      </div>

      <div id="contact" className="contact">
        <div className="header">
          <h1>Let's work together...</h1>
          <p>How do you take your coffee?</p>
        </div>
        <a
          href="http://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          Facebook
        </a>
        <a
          id="profile-link"
          href="http://github.com"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          GitHub
        </a>
        <a
          href="http://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          Twitter
        </a>
        <a href="mailto:" className="contact-details">
          Send a mail
        </a>
        <a href="tel:" className="contact-details">
          Call me
        </a>
      </div>

      <ExampleFunc text="This is an example Functional Component"/>

      <footer>
        This is just a demo portfolio..
        <p>
          &copy; Created by{" "}
          <a href="https://getemisha.tech/" target="_blank" rel="noreferrer">
            Emisha
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
