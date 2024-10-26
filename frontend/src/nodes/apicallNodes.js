// /frontend/src/nodes/APICallNode.js
import React from 'react';
import BaseNode from './basenode';

export const APICallNode = ({ id }) => {
  const content = (
    <div>
      <span>This is an API Call node.</span>
    </div>
  );

  const inputHandles = [{ position: 'left', id: 'input' }];
  const outputHandles = [{ position: 'right', id: 'output' }];

  return (
    <BaseNode
      title="API Call"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
