import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({ color, disabled, size, variant, children, sx }) => {
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant} sx={sx}>{children}</Button>
  )
}

export default CommonButton