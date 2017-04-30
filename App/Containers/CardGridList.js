import React from 'react'
import { View, Text, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
import Card from '../Components/Card'
import { ApplicationStyles, Metrics, Colors, Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux';

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/CardGridListStyle'

export default class cardGridList extends React.Component {

  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data.items)
    }

  }

  alternator () {

  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
    _renderRow (item, el, index) {
        return (
          <View style={styles.item}>
            <Card style={styles.gridCard}
                image={<Image
                    defaultSource={require('../Images/placeholder.png')}
                    source={item.thumbnail}
                    style={styles.gridImage }
                    resizeMode='cover'
                    alt={item.thumbnailAltText}
                />}
                title={<Text style={styles.h3}>{item.title}</Text>}
                content={
                  <View>
                    <Text style={styles.sub}>{item.shortDescription}</Text>
                  </View>
                }
                onPress={()=>NavigationActions.articleScreen(item)}
              />
          </View>
        )
    }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}
