import React from 'react';
import { Text, View, TextInput, Linking } from 'react-native';

export default class Hyperlink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={{fontFamily: this.props.fontFamily, fontSize: this.props.fontSize, color: this.props.textColor}}
            onPress={() => Linking.openURL(this.props.link)}>{this.props.text}</Text>
        )
    }
}

Hyperlink.propTypes = {
    fontFamily: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    link: React.PropTypes.string
};

Hyperlink.defaultProps = {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    text: 'link text',
    textColor: '#8F8E94',
    link: 'http://www.aerian.com'
};
