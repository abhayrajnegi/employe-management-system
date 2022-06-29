import React, {memo} from 'react';

const Button = memo(function Button({onClick, children}) {
    return(
        <button onClick={onClick} className="px-3 py-3 bg-red-500 border-transparent my-3 text-white">{children}</button>
    )
  });

  export default Button;