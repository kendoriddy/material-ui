import React from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentication = () => {
    const buttonStyles = {
        fontSize: '16px',
        fontWeight: 700,
        backgroundColor: 'primary',
        '&:hover': {
            backgroundColor: 'green',
            color: 'red'
        }
    }
  return <div>Authentication
  <CommonButton color='primary' variant='contained' size='medium' sx={buttonStyles}>Text</CommonButton>
  </div>;
};

export default Authentication;
