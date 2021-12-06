import React, { useCallback, useState } from 'react';
import SlideRule from 'react-slide-rule';
import PlaygroundInput from './PlaygroundInput';

const slideRuleProps = [
  {
    name: 'step',
    type: 'number',
    defaults: 1,
    description:
      'The granularity that the value must adhere to (i.e., the difference between each smaller mark).',
  },
  {
    name: 'value',
    type: 'number',
    defaults: 150,
    description:
      'The value of the component. Should be evenly divisible by the step.',
  },
  {
    name: 'min',
    type: 'number',
    defaults: 0,
    description:
      'The minimum allowed value of the component. Should be evenly divisible by the step.',
  },
  {
    name: 'max',
    type: 'number',
    defaults: 300,
    description:
      'The maximum allowed value of the component. Should be evenly divisible by the step and bigger than the min.',
  },
  {
    name: 'axis',
    type: "'x' | 'y' | 'x-reverse' | 'y-reverse'",
    defaults: 'x',
    description:
      'The main axis and the direction. The default values of some props depend on this prop.',
  },
];

export default React.memo(function () {
  const [options, setOptions] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

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
      {slideRuleProps.map((v) => (
        <PlaygroundInput {...v} handleChange={handleChange} />
      ))}
    </>
  );
});
