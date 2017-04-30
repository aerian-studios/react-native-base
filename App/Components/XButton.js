/**
 * A button with rounded corners
 * @class XButton
 *
 * @flow
 */
import React, {Component} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/XButtonStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';

// Example
ExamplesRegistry.add('Rounded XButton', () =>
  <XButton
    text='real buttons have curves'
    onPressDelegate={() => window.alert('Rounded Button Pressed!')}
  />
)

export default class XButton extends Component {

  getText () {
    const buttonText = this.props.text || this.props.children.toString()
    return buttonText;
  }

  render () {
    let style = (this.props.buttonStyle) ? this.props.buttonStyle : styles.button;
    let textStyle = (this.props.textStyle) ? this.props.textStyle : styles.buttonText;

    if (this.props.variant) {
      style = (this.props.buttonPressStyle) ? this.props.buttonPressStyle: styles['button-' + this.props.variant];
      textStyle = (this.props.textPressStyle) ? this.props.textPressStyle: styles.buttonTextPressed;
    }
    return (
      <TouchableOpacity style={style} onPress={this.props.onPressDelegate} activeOpacity={0.3}>
        {(this.props.icon) ? this.props.icon: null}
        {(this.props.text) ? <Text style={textStyle}>{this.getText()}</Text> : null}
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

XButton.propTypes = {
  children: React.PropTypes.object,
  icon: React.PropTypes.object,
  onPressDelegate: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  variant: React.PropTypes.string,
  buttonStyle: React.PropTypes.object,
  buttonPressStyle: React.PropTypes.object,
  textStyle: React.PropTypes.object,
  textPressStyle: React.PropTypes.object
};
