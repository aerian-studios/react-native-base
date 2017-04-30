/**
 * The default/home screen
 * @class PresentationScreen
 *
 * @flow
 */
import React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import HorizontalScrollView from '../Components/HorizontalScrollView';
import Card from '../Components/Card';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

    renderCategories = (categories) => {
        return categories.map((category, i) => (
            this.renderCategory(category, i)
        ))
    }

    renderCategory = (category, i) => {
        let filteredItems = this.props.items.filter(i => i.categoryId == category.categoryId);
        let data = Object.assign({items: filteredItems}, category);
        return (
            <View key={i}>
              <HorizontalScrollView
                title={category.title}
                moreTitle={category.linkText}
                onPress={()=>NavigationActions.cardGridList({title:category.title, data})}>
                {this.renderCards(filteredItems)}
              </HorizontalScrollView>
            </View>
        );
    }

    renderCards = (items) => {
        return items.map((item, i) => (
            this.renderCard(item, i)
        ))
    }

    renderCard = (item, i) => {
        return (<Card key={i} style={styles.card}
            image={
              <Image
                defaultSource={require('../Images/placeholder.png')}
                source={item.thumbnail}
                style={styles.cardImage}
                resizeMode='cover'
                alt={item.thumbnailAltText}
              />
            }
            title={<Text style={styles.h3}>{item.title}</Text>}
            content={
                <Text style={styles.sub}>{item.shortDescription}</Text>
            }
            onPress={()=>NavigationActions.articleScreen(item)}
          />);
    }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.heroImageContainer}  elevation={5}>
            <Image source={require('../Images/into-film-hero-image.jpg')} style={styles.heroImage}>

            <View style={styles.heroContentWrapper}>
              <Text style={styles.heroTitle} >
                Title Goes Here
              </Text>
              <Text style={styles.heroContent} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at tincidunt eros.
              </Text>
            </View>
            </Image>
          </View>


              {this.renderCategories(this.props.categories)}


        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.item,
      categories: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
