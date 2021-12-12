import React from 'react';

export default React.memo(function PlaygroundInput(props) {
  const { name, type, defaults, description, handleChange } = props;

  return (
    <div className="playground-input">
      <div className="playground-input-container">
        {name === 'axis' ? 
          <select name={name} style={{width:'153px', height:'21px'}} onChange={handleChange}>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="x-reverse">x-reverse</option>
            <option value="y-reverse">y-reverse</option>
          </select> : 
          <input
            id={name}
            name={name}
            placeholder={defaults}
            onChange={handleChange}
          />
        }
      </div>
      <div>
        <strong>{name}</strong> <strong>({type})</strong> 
        <div className="playground-description">{description}</div>
      </div>
    </div>
  );
});
