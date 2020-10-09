import React from 'react';

const Edit = props => {
    return (
      <div>
        I'm the MainSlider edit component!
        <div>
          <input></input>
          {/* do not include behavior between input */}
        </div>
        <div>
          <button type="button">Click Me!</button>
        </div>
      </div>
    );
};

export default Edit;