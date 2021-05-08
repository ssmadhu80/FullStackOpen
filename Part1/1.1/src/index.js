import ReactDOM from 'react-dom'
import App from './App'


import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        Header {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        Part1= {props.part1}, Exericese1={props.exercise1}
		</p>
		<p>
        Part2={props.part2}, Exercise2= {props.exercise2}
		</p>
		<p>
        Part3={props.part3}, Exercise3= {props.exercise3}
		</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
         Total No of Exercises {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
	  <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </div>
  )
}

export default App;


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
