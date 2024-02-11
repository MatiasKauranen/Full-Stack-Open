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

const Part = (content) => {
  return (
    <p>
      {content.part}: {content.exercise}
    </p>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Number of exercises: {totalExercises}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  const parts = [part1, part2, part3]; // Array containing all parts

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
