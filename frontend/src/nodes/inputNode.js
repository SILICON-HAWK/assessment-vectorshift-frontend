// inputNode.js

// /frontend/src/nodes/InputNode.js
import React, { useState } from 'react';
import BaseNode from './basenode';

export const InputNode = ({ id, data }) => {
  const inputFields = [
    {
      label: 'Name',
      name: 'inputName',
      type: 'text',
      defaultValue: data?.inputName || id.replace('customInput-', 'input_'),
    },
    {
      label: 'Type',
      name: 'inputType',
      type: 'select',
      options: ['Text', 'File'],
      defaultValue: data.inputType || 'Text',
    },
  ];

  return (
    <BaseNode
      title="Input"
      inputFields={inputFields}
      outputHandles={[{ position: 'right', id: 'value' }]}
      id={id}
    />
  );
};

