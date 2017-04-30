import test from 'ava';
import React from 'react';
import { View, Text } from 'react-native'
import HorizontalLine from '../../App/Components/HorizontalLine';
import { shallow, render } from 'enzyme';


// Basic wrapper
const wrapper = shallow(<HorizontalLine lineColor='red'/>);

test('component exists', t => {
    t.true(wrapper.length > 0) // exists
});

test('horizontal line shows no text', t => {
    t.false(wrapper.containsMatchingElement(<Text>Hello</Text>));
});

test('horizontal line with text property set shows the text', t => {
    const custom = shallow(<HorizontalLine text='Hello' />);
    t.true(custom.containsMatchingElement(<Text>Hello</Text>));
    //console.log(custom.debug());
});
