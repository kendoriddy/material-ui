import React from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentication = () => {
    const buttonStyles = {
        fontSize: '16px',
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'green',
            color: 'red'
        }
    }
  return <div>Authentication
  <CommonButton color='secondary' variant='contained' size='medium' sx={buttonStyles}>Text</CommonButton>
  </div>;
};

export default Authentication;
