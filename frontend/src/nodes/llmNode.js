// llmNode.js
import React from 'react';
import BaseNode from './basenode';

export const LLMNode = ({ id, data }) => {
  const content = (
    <div>
      <span>This is a LLM.</span>
    </div>
  );

  const inputHandles = [
    { position: 'left', id: 'system' },
    { position: 'left', id: 'prompt' }
  ];

  const outputHandles = [
    { position: 'right', id: 'response' }
  ];

  return (
    <BaseNode
      title="LLM"
      content={content}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      id={id}
    />
  );
};
