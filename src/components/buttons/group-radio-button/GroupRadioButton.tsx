import React, { FC } from 'react';

import { Radio } from 'antd';

import { GroupRadioButtonType } from './types/GroupRadioButtonType';

export const GroupRadioButton: FC<GroupRadioButtonType> = ({ values, onChange }) => {


    
}


    (
  <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
    <Radio.Button value="large">Large</Radio.Button>
    <Radio.Button value="default">Default</Radio.Button>
    <Radio.Button value="small">Small</Radio.Button>
  </Radio.Group>
);
