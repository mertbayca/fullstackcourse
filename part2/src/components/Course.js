import React from 'react';

const Course = ({ course }) => {
    const sum = course.parts.map((c) => c.exercises).reduce((a, b) => a + b);
  
    return (
      <div>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map((c) => (
            <li key={c.id}>
              {c.name} {c.exercises}
            </li>
          ))}
        </ul>
        <p>total of {sum} exercises</p>
      </div>
    );
  };

export default Course