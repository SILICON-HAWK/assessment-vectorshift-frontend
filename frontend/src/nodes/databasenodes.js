// /frontend/src/nodes/DatabaseNode.js
import React from 'react';
import BaseNode from './basenode';

export const DatabaseQueryNode = ({ id }) => {
  const content = (
    <div>
      <span>This is a Database node.</span>
    </div>
  );

  const inputHandles = [{ position: 'left', id: 'query' }];
  const outputHandles = [{ position: 'right', id: 'result' }];

  return (
    <BaseNode
      title="Database Query"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
