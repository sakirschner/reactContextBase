import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">
        <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
    </button>;
  }
}

export default Button;
