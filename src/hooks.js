import { useState } from 'react';

// useInput returns [ {value, onChange()}, resetValue() ]
// So the value, a function to change the value, and a function to reset back to the initial value
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};
