import React from 'react';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  );
}

const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  );
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
