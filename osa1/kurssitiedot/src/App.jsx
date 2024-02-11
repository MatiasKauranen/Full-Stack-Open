import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  const partComponents = parts.map(part => (
    <Part
      key={part.name}
      part={part.name}
      exercise={part.exercises}
    />
  ));

  return <div>{partComponents}</div>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part}: {exercise}
    </p>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Number of exercises: {totalExercises}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
