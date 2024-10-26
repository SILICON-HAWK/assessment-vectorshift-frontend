// /frontend/src/nodes/DataMergeNode.js
import React from 'react';
import BaseNode from './basenode';

export const DataProcessingNode = ({ id }) => {
  const content = (
    <div>
      <span>This is a Data Merge node.</span>
    </div>
  );

  const inputHandles = [{ position: 'left', id: 'input' }];
  const outputHandles = [{ position: 'right', id: 'output' }];

  return (
    <BaseNode
      title="Data Processing"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
