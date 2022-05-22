import React, { useState } from 'react';
import Dropdown from './dropdown';
import data from '../data/countries.json';
import '../../src/app/dropdown/styles.css';
export default function App() {
  const [value, setValues] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        options={data}
        id='id'
        label='name'
        prompt='Select country...'
        value={value}
        onChange={(val) => setValues(val)}
      />
    </div>
  );
}
