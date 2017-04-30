/**
 * A Drawer button
 * @class DrawerButton
 *
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/DrawerButtonStyles';

import ExamplesRegistry from '../Services/ExamplesRegistry';

// Example
ExamplesRegistry.add('Drawer Button', () => {
  let pressed = false;
  <DrawerButton
    selected={pressed}
    text='Example left drawer button'
    onPressDelegate={() => {
      pressed = true;
      window.alert('Your drawers are showing');}}
  />
});

class DrawerButton extends Component {
  getText () {
    const buttonText = this.props.text;

    return buttonText;
  }

  onPress(event) {
    this.props.onPressDelegate(event);
  }

  constructor(...props) {
    super(...props);

    this.onPress = this.onPress.bind(this);
  }

  render () {
    return (
      <TouchableOpacity style={(this.props.selected) ? styles.buttonPressed : styles.button} onPress={this.onPress}>
        {(this.props.text) ? <Text style={(this.props.selected) ? styles.buttonTextPressed : styles.buttonText}>{this.getText()}</Text> : null}
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.object,
  onPressDelegate: PropTypes.func.isRequired
};

export default DrawerButton;
