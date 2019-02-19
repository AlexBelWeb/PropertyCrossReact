import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'

interface HelloProps {
  project: string;
  author: string;
}

const Hello: React.FC<HelloProps> = props => {
  const { project, author } = props;
  return (
    <div className="hello">
      <h1>{project}</h1>
      <h2>Author: {author}</h2>
    </div>
  );
};

ReactDOM.render(
  <Hello project="PropertyCrossReact" author="Aleksandr Beloded" />,
  document.querySelector('#root')
);
