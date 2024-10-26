// transformNode.js
import React from 'react';
import BaseNode from './basenode';

export const UserInteractionNode = ({ id }) => {
  const content = (
    <div>
      <span>This is a Transform node.</span>
    </div>
  );

  const inputHandles = [{ position: 'left', id: 'input' }];
  const outputHandles = [{ position: 'right', id: 'output' }];

  return (
    <BaseNode
      title="User Interaction"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
