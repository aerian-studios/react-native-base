/**
 * A full width button
 * @class Card
 *
 * @flow
 */
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../Themes/ApplicationStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
// ExamplesRegistry.add('Card', () =>
//   <Card style={styles.screen.card}
//     image={
//         <Image
//             defaultSource={require('../Images/placeholder.png')}
//             source={require('../Images/wood-nature-sunny-forest.jpg')}
//             style={styles.screen.cardImage}
//             resizeMode='cover'
//             alt='This needs to be a description'
//         />
//         }
//         title={<Text style={styles.screen.h3}>This is a static title</Text>}
//         content={
//         <View>
//             <Text>Hello</Text>
//         </View>
//         }
//     />
// )

export default class Card extends React.Component {
    getImage(image: *) {
        if (!image) {
            return null;
        }

        return (<View style={styles.screen.cardImageWrapper}>{image}</View>);
    }

    getTitle(title: *) {
        if (!title) {
            return null;
        }

        return (<View style={styles.screen.cardTitleWrapper}>{title}</View>);
    }

    getContent(content: *) {
        if (!content) {
            return null;
        }

        return (<View style={styles.screen.cardContentWrapper}>{content}</View>);
    }

    onPress(event) {
        if (this.props.onPress) {
            this.props.onPress(event);
        }
    }

    constructor(...args) {
        super(...args);

        this.onPress = this.onPress.bind(this);
    }

    render () {
        return (
            <View style={this.props.style} elevation={(this.props.style && this.props.style.shadowColor) ? 3 : 0}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.onPress}
                >
                    {this.getImage(this.props.image)}
                    {this.getTitle(this.props.title)}
                    {this.getContent(this.props.content)}
                </TouchableOpacity>
            </View>
        );
    }
}

Card.propTypes = {
  title: React.PropTypes.any,
  content: React.PropTypes.any,
  image: React.PropTypes.any,
  style: React.PropTypes.number,
  onPress: React.PropTypes.func
};
