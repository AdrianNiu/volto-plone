import React from 'react';
import { Button } from 'semantic-ui-react';

const Edit = props => {
    return (
      <div>
        I'm the MainSlider edit component!
        <div>
          <input></input>
          {/* do not include behavior between input */}
        </div>
        <div>
          <Button type="button">Click Me!</Button>
        </div>
      </div>
    );
};

export default Edit;