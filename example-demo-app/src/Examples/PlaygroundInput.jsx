import React from 'react';

export default React.memo(function PlaygroundInput(props) {
  const { name, type, defaults, description, handleChange } = props;

  return (
    <>
      <div>
        <strong>{name}</strong> <strong>({type})</strong>
      </div>
      <input
        id={name}
        name={name}
        placeholder={`default: ${defaults}`}
        onChange={handleChange}
      />
      <div>{description}</div>
    </>
  );
});
