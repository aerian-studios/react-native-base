import test from 'ava';
import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../App/Components/Card';
import { shallow } from 'enzyme';

test('component exists', t => {
  const wrapper = shallow(<Card onPress={() => 'lo'} />);

  t.is(wrapper.length, 1) // exists
});

test('Card wrapper adds elevation for Android if shadowColor is present in the styles', t => {
  const wrapper = shallow(<Card />);
  const elevatedWrapper = shallow(<Card style={{shadowColor: 'black'}} />);

  t.true(wrapper.prop('elevation') === 0);
  t.true(elevatedWrapper.prop('elevation') > 0);
});

test('Card elements are not added if not present in props', t => {
  const wrapper = shallow(<Card />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 0);
});

test('Card title is added if present in props', t => {
  const wrapper = shallow(<Card title='Hi' />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 1);
});

test('Card image is added if present in props', t => {
  const wrapper = shallow(<Card image='Hi' />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 1);
});

test('Card content is added if present in props', t => {
  const wrapper = shallow(<Card content='Hi' />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 1);
});

test('Card content can be multifarious', t => {
  const wrapper = shallow(<Card content={<View><View><Text>Hi too</Text></View><Text>Hi as well</Text></View>} />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 1);
  t.is(touchable.childAt(0).childAt(0).children().length, 2)
});

test('Card adds all props present', t => {
  const wrapper = shallow(<Card content='Hi' title='hi' image='hi' />);

  t.is(wrapper.children().length, 1);

  const touchable = wrapper.childAt(0);
  t.is(touchable.children().length, 3);
});

test('Card press method is called when pressed', t => {
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => {
    i++;
  };
  const wrapperPress = shallow(<Card onPress={onPress} />);

  // uses the right handler
  t.is(i, 0);
  wrapperPress.childAt(0).simulate('press');
  t.is(i, 1);
});

test('Card does not break if no onPress added', t => {
  const wrapperPress = shallow(<Card />);

  wrapperPress.childAt(0).simulate('press');
});