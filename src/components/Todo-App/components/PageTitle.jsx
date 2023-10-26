import React from 'react';
import '../../../css/title.css'

function PageTitle({ children, ...rest }) {
  return (
    <p className="title" {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
