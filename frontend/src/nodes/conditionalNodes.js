// /frontend/src/nodes/ConditionalNode.js
import React from 'react';
import BaseNode from './basenode';

export const ConditionalNode = ({ id }) => {
  const content = (
    <div>
      <span>This is a Conditional node.</span>
    </div>
  );

  const inputHandles = [{ position: 'left', id: 'input' }];
  const outputHandles = [
    { position: 'right', id: 'true' },
    { position: 'right', id: 'false' }
  ];

  return (
    <BaseNode
      title="Conditional"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
