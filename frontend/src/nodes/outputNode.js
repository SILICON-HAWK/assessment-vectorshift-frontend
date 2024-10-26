// outputnode.js
import React from 'react';
import BaseNode from './basenode';

export const OutputNode = ({ id, data }) => {
  // Define the input fields for name and type
  const inputFields = [
    {
      label: 'Name',
      name: 'outputName',
      type: 'text',
      defaultValue: data?.outputName || id.replace('customOutput-', 'output_'),
    },
    {
      label: 'Type',
      name: 'outputType',
      type: 'select',
      options: ['Text', 'Image'],
      defaultValue: data.outputType || 'Text',
    },
  ];

  const inputHandles = [
    { position: 'left', id: 'value' }
  ];

  return (
    <BaseNode
      title="Output"
      content={null} // No additional content needed, as input fields are handled in BaseNode
      inputHandles={inputHandles}
      inputFields={inputFields} // Pass input fields to BaseNode
      id={id}
    />
  );
};
