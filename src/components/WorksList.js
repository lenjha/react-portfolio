import React, { Component } from 'react';
import Works from './Works';

var masterWorkList = [
  {
    title: "1"
    description: "1 desc"
  },
  {
    title: "2"
    description: "2 desc"
  },
  {
    title: "3"
    description: "3 desc"
  }
];

function WorksList(){
  return (
    <div>
        <div className='work'>
          {masterWorkList.map((work, index) =>
            <Work
                title={work.title}
                description={work.description}
                key={index}
            />
          )}
      </div>
    </div>
  );
}

export default WorksList;
