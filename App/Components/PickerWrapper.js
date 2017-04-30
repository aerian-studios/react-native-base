/**
 * Class to wrap iOS pickers so that they take up less space until clicked
 * 
 * @class PickerWrapper
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Platform,
    Picker
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../Themes';

export default class PickerWrapper extends Component {
    animateWrapper(open) {
        if (open) {
            this.refs.animate_wrapper.transitionTo({opacity: 1})
        } else {
            this.refs.animate_wrapper.transitionTo({opacity: 0})
        }
    }
    
    animateIcon(open) {
        if (open) {
            this.refs.icon.transitionTo({transform: [{'rotate' : '90deg'}]}, 400)
        } else {
            this.refs.icon.transitionTo({transform: [{'rotate' : '0deg'}]}, 200)
        }
    }

    onPress(event: Object) {
        const active = !this.state.active;

        if (this.props.animate && Platform.OS === 'ios') {
            this.animateIcon(active);
            this.animateWrapper(active);
        }

        this.setState({active: active});

        if (this.props.pressDelegate) {
            this.props.pressDelegate(event);
        }
    }

    onChange(event: String): void {
        this.setState({
            text: this.getText(event),
            active: false
        });

        if (this.props.animate && Platform.OS === 'ios') {
            this.animateIcon(false);
            this.animateWrapper(false);
        }

        if (this.props.changeDelegate) {
            this.props.changeDelegate(event);
        }
    }


    getText(value: String): String {
        const label = this.props.options.filter((option) => {
            return (option.value === value)
        })[0];

        return (label) ? label.label : '';
    }

    createPickerWrapper(props: Object, state: Object): Object {
        return (
            <Animatable.View ref='animate_wrapper' style={(this.props.animate) ? ApplicationStyles.dropDownWrapper: {}}>
                {this.createPicker(props, state)}
            </Animatable.View>
        );
    }


    createPicker(props: Object, state: Object): Object {
        return (
            <Picker
                style={ApplicationStyles.picker}
                selectedValue={this.props.selectedValue || state.value}
                onValueChange={this.onChange}
                prompt={props.prompt || 'Please select'}
                mode={props.mode || 'dropdown'}>
                    {this.outputOptions(props.options)}
            </Picker>
        );
    }

    outputOptions(options: Array<Object>): Array<Object> {
        return options.map((option) => {
            return (<Picker.Item key={option.value} label={option.label} value={option.value} style={ApplicationStyles.inputText} />);
        });
    }

    icon(icon: Object, animation: Boolean): Object {
        if (icon) {
            // Do not remove the style even though it is empty - without it there is a bug error
            return (
                <Animatable.View ref='icon' style={{}}>
                    {icon}
                </Animatable.View>
            );
        }

        return null;
    }

    state: Object

    constructor(...args) {
        super(...args);

        this.onPress = this.onPress.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            text: this.getText(this.props.selectedValue) || this.props.prompt || 'Please select',
            value: this.props.selectedValue || '',
            active: this.props.active || false
        }
    }

    render() {
        // the following line makes it hard to test
        if (this.props.renderOverride === 'nowrap' || (Platform.OS === 'android' && this.props.renderOverride !== 'wrap')) {
            return (
                <View>
                    {this.createPicker(this.props, this.state)}
                </View>
            );
        }
        
        return (
            // zIndex required to show the dropdown over the top of other elements
            <View style={{zIndex: 2}}>
                <View style={this.props.style || ApplicationStyles.pickerWrapper}>
                    <TouchableOpacity
                        onPress={this.onPress}
                        style={ApplicationStyles.pickerWrapperButton}
                        activeOpacity={0.5}
                    >
                        <Text style={ApplicationStyles.inputText}>{this.getText(this.props.selectedValue) || this.state.text}</Text>
                    </TouchableOpacity>
                    {this.icon(this.props.icon, this.props.animation, this.state.active)}
                </View>
                {this.createPickerWrapper(this.props, this.state)}
            </View>
        );
    }
}

PickerWrapper.propTypes = {
    mode: PropTypes.string,//currently on iOS doesn't do anything, on Android it renders the native version
    options: PropTypes.array,
    selectedValue: PropTypes.string,
    prompt: PropTypes.string,
    icon: PropTypes.object,
    animation: PropTypes.bool,
    active: PropTypes.bool,
    style: PropTypes.object,
    pickerStyle: PropTypes.object,
    pressDelegate: PropTypes.func,
    changeDelegate: PropTypes.func,
    renderOverride: PropTypes.string,// useful for testing and for changing behaviour 'wrap' or 'nowrap'
}