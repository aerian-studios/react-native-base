import test from 'ava';
import React from 'react';
import { View, Text } from 'react-native'
import ArticleScreen from '../../App/Containers/ArticleScreen';
import { shallow, render } from 'enzyme';
import HorizontalLine from '../../App/Components/HorizontalLine';
import Hyperlink from '../../App/Components/Hyperlink';

const content =
    [
        {'type': 'heroImage', 'content': require('../Images/into-film-hero-image.jpg')},
        {'type': 'articleTitle', 'content': 'H1 heading helneu 26/30px bold dolor sit amet, conse ctetur adipiscing elit'},
        {'type': 'articleSubTitle', 'content': 'Caption helneu 15/22px light'},
        {'type': 'paragraph', 'content': 'Paragraph helneu 18/27px light donec ornare, lectus at interdum elementum, augue felis pharetra est, a bibendum leo erat at augue. Praesent id elit nunclaoreet sed dignissim.'},
        {'type': 'hyperlink', 'content': 'link helneu 18px medium', 'link': 'http://www.aerian.com'},
        {'type': 'paragraph', 'content': 'Suspendisse potenti. Nullam finibus sapien at nisl interdu iaculis ulla dignissim'},
        {'type': 'paragraph', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida sodales faucibus. Cras tempus, enim sed commodo varius, nunc velit lobortis massa, at sodales turpis tortor eu ante. In sit amet nibh molestie, dignissim orci eget, dictum est. Praesent condimentum est libero, nec faucibus libero commodo in.'},
        {'type': 'header', 'content': 'H2 style helneu 24/35px light'},
        {'type': 'image', 'content': require('../Images/into-film-hero-image.jpg')},
        {'type': 'header', 'content': 'H2 style helneu 24/35px light'},
        {'type': 'bullets', 'content': ['List item helneu 18/30px light', 'List item two goes here', 'List item three goes here']},
        {'type': 'paragraph', 'content': 'Suspendisse potenti. Nullam finibus sapien at nisl interdum Link Helneu 18 medium iaculis ulla dignissim condimentum nibh non eleifend.'},
        {'type': 'image', 'content': require('../Images/into-film-hero-image.jpg')},
        {'type': 'caption', 'content': 'Caption helneu 15/22px light'},
        {'type': '', 'content': ''}
    ];

// Basic wrapper
const wrapper = shallow(<ArticleScreen content={content} />);

test('component exists', t => {
    t.true(wrapper.length > 0) // exists
});

test('Article screen contains a HorizontalLine component', t => {
    t.true(wrapper.find(HorizontalLine).length > 0);
});

test('Article screen contains a Hyperlink component', t => {
    t.true(wrapper.find(Hyperlink).length > 0);
});
