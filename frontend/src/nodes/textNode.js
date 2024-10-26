// textNode.js// /frontend/src/nodes/TextNode.js
import React from 'react';
import BaseNode from './basenode';

export const TextNode = ({ id, data }) => {
  // Define the input field for the text
  const inputFields = [
    {
      label: 'Text',
      name: 'text',
      type: 'text',
      defaultValue: data?.text || '{{input}}',
    },
  ];

  const outputHandles = [
    { position: 'right', id: 'output' }
  ];

  return (
    <BaseNode
      title="Text"
      content={null} // No additional content needed, as input fields are handled in BaseNode
      outputHandles={outputHandles}
      inputFields={inputFields} // Pass input fields to BaseNode
      id={id}
    />
  );
};
