import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';const Header = (props) => (
    <h1>
        { props.title }
    </h1>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercises}
    </p>
)

const Content = (props) => (
    <div>
        <Part part = {props.p[0].name} excercise = {props.p[0].exercises} />
        <Part part = {props.p[1].name} excercise = {props.p[1].exercises} />
        <Part part = {props.p[2].name} excercise = {props.p[2].exercises} />
    </div>
);

const Total = (props) => (
    <div>
        <p>Number of exercises {props.p[0].exercises + props.p[1].exercises + props.p[2].exercises}</p>
    </div>
)

const App = () => {
  const course = {
      name: 'Half Stack application development',
      p: [
            { 
            name:'Fundamentals of React',
            exercises:10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    };
  return (
    <div>
      < Header title = {course.name} />
      < Content p = {course.p} />
      < Total p = {course.p} />
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))

