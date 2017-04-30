import Immutable from 'seamless-immutable'

export const ITEMS_CLEAR = 'ITEMS_CLEAR'

export const Creators = {
    clearEvents: () => {
        return {
            type: ITEMS_CLEAR
        };
    }
};

/* ------------- Initial State ------------- */
export const ITEM = {};

export const INITIAL_STATE = Immutable([
    {
        title: 'Content title that is two lines',
        categoryId: 1,
        shortDescription: 'Subheading',
        thumbnail: require('../Images/wood-nature-sunny-forest.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 2',
        categoryId: 1,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'This is a 2 line article title',
        categoryId: 1,
        shortDescription: 'this is an example of a 2 line article',
        thumbnail: require('../Images/wood-nature-sunny-forest.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 4',
        categoryId: 2,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/wood-nature-sunny-forest.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 5',
        categoryId: 2,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 6',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 7',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 8',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 9',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 10',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 11',
        categoryId: 3,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 12',
        categoryId: 1,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 13',
        categoryId: 1,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 14',
        categoryId: 1,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 15',
        categoryId: 1,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    },
    {
        title: 'Article 16',
        categoryId: 2,
        shortDescription: 'this is an example of an article',
        thumbnail: require('../Images/into-film-hero-image.jpg'),
        thumbnailAltText: 'This needs to be a description',
        content:
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
        ]
    }
]);

/* ------------- Reducers ------------- */
export const clear = (state) => INITIAL_STATE


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEMS_CLEAR:
            return clear(state);
        default:
            return state;
    }
};
