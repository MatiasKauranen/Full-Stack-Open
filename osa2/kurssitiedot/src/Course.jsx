// Course.js
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

export default Course;
