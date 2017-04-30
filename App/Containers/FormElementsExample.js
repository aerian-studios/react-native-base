import React from 'react'
import { View, ScrollView, Text, Picker, TextInput, Button, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PickerWrapper from '../Components/PickerWrapper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import XButton from '../Components/XButton';
import { Colors, Fonts, Images, Metrics, ApplicationStyles } from '../Themes';


const pickerOptions: Array = [
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'React Native',
    value: 'react_native'
  },
  {
    label: 'Vanilla JavaScript',
    value: 'js'
  }
];

export default class FormElementsExample extends React.Component {

  buttonPress(event) {
    alert('Dude!')
  }

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      colorTrueSwitchIsOn: true,
      trueSwitchIsOn: true,
      isDateTimePickerVisible: false,
      datetime: null
    };

    this.buttonPress = this.buttonPress.bind(this);
  }

  render() {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <ScrollView keyboardShouldPersistTaps={true}>
          <Text style={ApplicationStyles.screen.h2}>Form element examples</Text>
          <View style={ApplicationStyles.formFieldSet}>
            <Text style={ApplicationStyles.formLabel}>Standard text input</Text>
            <View style={ApplicationStyles.textInputWrapper}>
              <TextInput
                style={ApplicationStyles.textInput}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                autoCorrect={true}
                multiline={false}
                underlineColorAndroid={Colors.clear}
                placeholder='styled text placeholder'
                placeholderTextColor={Colors.darkSelect}
                />
            </View>
            <TextInput
              style={ApplicationStyles.textInput}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
              autoCorrect={false}
              multiline={false}
              underlineColorAndroid={Colors.brandColor1}
              placeholder='native text placeholder'
              />
          </View>
          <View style={ApplicationStyles.formFieldSet}>
            <Text style={ApplicationStyles.formLabel}>Custom picker (with 1 variation)</Text>
            <PickerWrapper
              selectedValue={this.state.language}
              changeDelegate={(lang) => this.setState({ language: lang })}
              options={pickerOptions}
              animate='true'
              icon={<Icon name='angle-right' size={Metrics.icons.tiny} style={{ alignSelf: 'flex-end' }} />}
              prompt="Pick one of these"
              mode='dropdown' />

            <Text style={ApplicationStyles.formLabel}>Unstyled native picker</Text>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({ language: lang })}
              prompt="Pick one, just one"
              mode='dropdown'>
              <Picker.Item label="React" value="react" />
              <Picker.Item label="React Native" value="react_native" />
              <Picker.Item label="Vanilla JavaScript" value="js" />
            </Picker>

            <Text style={ApplicationStyles.formLabel}>Community date time picker</Text>
            <TouchableOpacity
              onPress={() => this.setState({ isDateTimePickerVisible: true })}>
              <Text style={ApplicationStyles.textInput}>{this.state.datetime || 'Show Date-Time Picker'}</Text>
            </TouchableOpacity>
            <DateTimePicker
              mode='datetime'
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={(event) => {
                this.setState({ isDateTimePickerVisible: false, datetime: event.toString() });
              }}
              onCancel={(event) => this.setState({ isDateTimePickerVisible: false })}
            />
          </View>
          <View style={ApplicationStyles.formFieldSet}>
            <Button
              onPress={event => alert('Totally Dude!')}
              title="Press My native button"
              accessibilityLabel="See an informative alert"
              color={Colors.brandColor1}
              />
            <Button
              onPress={event => alert('Totally Dude!')}
              title="Can't Press My native button"
              accessibilityLabel="Cant't see an informative alert"
              color={Colors.brandColor2}
              disabled
              />
            <XButton text='This is a custom button' onPressDelegate={event => alert('Totally custom!')} />
          </View>
          <View style={ApplicationStyles.formFieldSet}>
            <View style={ApplicationStyles.formRow}>
              <Switch
                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                value={this.state.falseSwitchIsOn} />
                <Text style={ApplicationStyles.formLabelRight}>Unstyled native switch</Text>
            </View>
            <View style={ApplicationStyles.formRow}>  
              <Switch disabled={true} value={true} />
              <Text style={ApplicationStyles.formLabelRight}>Disabled native switch</Text>
            </View>
            <View style={ApplicationStyles.formRow}>
              <Switch
                onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
                onTintColor={Colors.brandColor1}
                thumbTintColor={Colors.brandColor2}
                tintColor={Colors.darkSelect}
                value={this.state.colorFalseSwitchIsOn} />
                <Text style={ApplicationStyles.formLabelRight}>Styled native switch</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
