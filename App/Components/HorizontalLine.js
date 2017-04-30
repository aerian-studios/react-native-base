import React from 'react'
import { Text, View, TextInput } from 'react-native';
import styles from './Styles/HorizontalLineStyle'

export default class HorizontalLine extends React.Component {
  constructor(props) {
    super(props);

    this.renderLine = this.renderLine.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderInner = this.renderInner.bind(this);
  }

  renderLine(key) {
    return <View key={key} style={[styles.line, {backgroundColor: this.props.lineColor}]} />
  }

  renderText(key) {
    return (
        <View key={key} style={styles.textContainer} >
          <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
        </View>
    )
  }

  renderInner() {
    if (!this.props.text) {
      return this.renderLine()
    }
    return [
      this.renderLine(1),
      this.renderText(2),
      this.renderLine(3)
    ]
  }

  render() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: this.props.marginLeft, marginRight: this.props.marginRight }}>
          {this.renderInner() }
        </View>
    )
  }
}

HorizontalLine.propTypes = {
  lineColor: React.PropTypes.string,
  text: React.PropTypes.string,
  textColor: React.PropTypes.string,
  marginLeft: React.PropTypes.number,
  marginRight: React.PropTypes.number
};

HorizontalLine.defaultProps = {
  marginLeft: 0,
  marginRight: 0,
  lineColor: 'rgb(216,216,216)',
  textColor: '#8F8E94'
};
