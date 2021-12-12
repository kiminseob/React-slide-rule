import React, { useCallback, useState } from 'react';
import SlideRule from 'react-slide-rule';
import PlaygroundInput from './PlaygroundInput';
import slideRuleProps  from 'Data/exampleProps';

export default React.memo(function () {
  const [options, setOptions] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(e.target,e.target.name, e.target.value)
    if (!value) {
      const { defaults } = slideRuleProps.filter((v) =>
        v.name === name ? v.defaults : false
      );
      setOptions((v) => ({ ...v, [name]: defaults }));
    } else {
      setOptions((v) => ({ ...v, [name]: value }));
    }
  });

  return (
    <>
      <div className="playground">
        <SlideRule {...options} />
      </div>
      <h3>Props</h3>
      {slideRuleProps.map((v) => (
        <PlaygroundInput key={v.name} {...v} handleChange={handleChange} />
      ))}
    </>
  );
});
