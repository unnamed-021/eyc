import React from 'react';
import { ReactComponent as Unchecked } from '../../../assets/icons/checkbox.svg';
import { ReactComponent as Checked } from '../../../assets/icons/checkedBox.svg';

const Checkbox = ({ checked, onChange, width, height, stroke }) => {
  return (
    <div onClick={onChange}>
      {checked ? (
        <Unchecked width={width} height={height} />
      ) : (
        <Checked width={width} height={height} stroke={stroke} />
      )}
    </div>
  );
};

export default Checkbox;
