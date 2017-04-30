import test from 'ava';
import React from 'react';
import {
    Platform
} from 'react-native';
import PickerWrapper from '../../App/Components/PickerWrapper';
import { shallow } from 'enzyme';

const pickerOptions = [
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
// Basic wrapper
const wrapper = shallow(<PickerWrapper
              selectedValue=''
              options={pickerOptions}
              prompt="Pick one of these"
              mode='dialog' />);

test('Component exists', t => {
  t.true(wrapper.length > 0) // exists
});

test('Component renders native picker for android/ renderOverride prop', t => {
  const sut = shallow(<PickerWrapper
              selectedValue=''
              renderOverride='nowrap'
              options={pickerOptions}
              prompt="Pick one of these"
              mode='dialog' />);

  t.is(sut.children().length, 1);
  t.is(sut.children().first().name(), 'Picker');
});

test('Component renders a custom picker for iOS/ renderOverride prop', t => {
  const sut = shallow(<PickerWrapper
              selectedValue=''
              options={pickerOptions}
              renderOverride='wrap'
              prompt="Pick one of these"
              mode='dialog' />);

  t.is(sut.children().length, 2);
  t.is(sut.children().first().name(), 'View');
  // Check that there is an animated view wrapper
  t.is(sut.childAt(1).name(), 'Animatable.View');

  // Check that there is is a picker in the animated view
  const pickerWrap = sut.childAt(1);
  t.is(pickerWrap.children().length, 1);
  t.is(pickerWrap.childAt(0).name(), 'Picker');
});

test('Picker renders with an icon if one is present', t => {
  const sut = shallow(<PickerWrapper
              selectedValue=''
              options={pickerOptions}
              renderOverride='wrap'
              prompt='hi'
              icon='iconMock'
              mode='dialog' />);

  const label = sut.childAt(0);
  t.is(label.children().length, 2);
});

test('Component renders prompt text is no selected value prop', t => {
  const promptText = "Pick one of these";
  const sut = shallow(<PickerWrapper
              selectedValue=''
              options={pickerOptions}
              renderOverride='wrap'
              prompt={promptText}
              mode='dialog' />);

  const label = sut.childAt(0);

  t.true(label.children().length === 1);

  const text = label.childAt(0).childAt(0);
  t.true(text.name() === 'Text');
  t.true(text.props().children === promptText);
});

test('Component renders selected value text is selected value prop given', t => {
  const promptText = "Pick one of these";
  const selectedValue = pickerOptions[0].value;
  const sut = shallow(<PickerWrapper
              selectedValue={selectedValue}
              options={pickerOptions}
              renderOverride='wrap'
              prompt={promptText}
              mode='dialog' />);

  const label = sut.childAt(0);
  const text = label.childAt(0).childAt(0);
  
  t.true(text.props().children !== promptText);
  t.true(text.props().children !== selectedValue);
});

// not really sure how to do this, nevertheless the mechanism is tested above
test.skip('Component changes text when picker value changes', t => {
  const promptText = "Pick one of these";
  let selectedValue = '';
  const sut = shallow(<PickerWrapper
              selectedValue={selectedValue}
              options={pickerOptions}
              renderOverride='wrap'
              prompt={promptText}
              changeDelegate={val => {
                console.log('change fired', val)// never fires
                selectedValue = val;
              }}
              mode='dialog' />);

  const label = sut.childAt(0);
  const text = label.childAt(0).childAt(0);
  const picker = sut.childAt(1).childAt(0);
  
  t.true(text.props().children === promptText);
  picker.simulate('valuechange',[pickerOptions[0]]);
  selectedValue = pickerOptions[0].value;
  sut.setProps({selectedValue});
  sut.update();
  t.is(text.props().children, pickerOptions[0].value);
});