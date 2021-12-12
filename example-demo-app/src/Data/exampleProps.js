export default [
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
    {
      name: 'width',
      type: "number",
      defaults: '300 (y-axis: 75)',
      description:
        'The width of the canvas element in pixel.',
    },
    {
      name: 'height',
      type: "number",
      defaults: '75 (y-axis: 300)',
      description:
        'The height of the canvas element in pixel.',
    },
    {
      name: 'gap',
      type: "number",
      defaults: '10',
      description:
        'The distance between each smaller mark in pixel.',
    },
    {
      name: 'unit',
      type: "string",
      defaults: '',
      description:
        'The suffix of numbers.',
    },
  ];