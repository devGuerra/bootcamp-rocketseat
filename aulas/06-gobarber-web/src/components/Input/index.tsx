import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';
import { IconBaseProps } from 'react-icons/lib/cjs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  )

}

export default Input;
