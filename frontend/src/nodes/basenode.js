// /frontend/src/nodes/BaseNode.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Handle, Position } from 'reactflow';

const mapPosition = (position) => {
  switch (position) {
    case 'top':
      return Position.Top;
    case 'right':
      return Position.Right;
    case 'bottom':
      return Position.Bottom;
    case 'left':
      return Position.Left;
    default:
      return Position.Top;
  }
};

const BaseNode = ({ 
  title, 
  content, 
  inputHandles = [], 
  outputHandles = [], 
  inputFields = [], 
  id 
}) => {
  const [fields, setFields] = useState(
    inputFields.reduce((acc, { name, defaultValue }) => {
      acc[name] = defaultValue || '';
      return acc;
    }, {})
  );

  const handleFieldChange = (name, value) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="base-node" style={{
            width: 200, 
            height: 80,
            padding: 7,
            border: '3px solid #bc7dffd9' 
        
        }}>
      <div>
        <span>{title}</span>
      </div>

      {inputFields.map(({ label, name, type, options }) => (
        <div key={name}>
          <label>
            {label}:
            {type === 'text' && (
              <input
                type="text"
                value={fields[name]}
                onChange={(e) => handleFieldChange(name, e.target.value)}
              />
            )}
            {type === 'select' && (
              <select
                value={fields[name]}
                onChange={(e) => handleFieldChange(name, e.target.value)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>
      ))}

      <div className="node-content">
        {content}
      </div>

      {inputHandles.map((handle, index) => (
        <Handle
          key={index}
          type="target"
          position={mapPosition(handle.position)}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}

      {outputHandles.map((handle, index) => (
        <Handle
          key={index}
          type="source"
          position={mapPosition(handle.position)}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};

BaseNode.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
  inputHandles: PropTypes.array,
  outputHandles: PropTypes.array,
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultValue: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  id: PropTypes.string.isRequired,
};

export default BaseNode;
