/**
 * This class describes the content and behaviour of the navigation drawer
 * @class DrawerContent
 *
 * @flow
 */

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    });
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents() {
    this.setState({active: 'components'});
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage() {
    this.setState({active: 'usage'});
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI() {
    this.setState({active: 'api'});
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressHome() {
    this.setState({active: 'home'});
    this.toggleDrawer()
    NavigationActions.presentationScreen()
  }

  handlePressSettings() {
    this.setState({active: 'settings'});
    this.toggleDrawer()
    NavigationActions.formElementsExample()
  }

  handlePressThemes() {
    this.setState({active: 'theme'});
    this.toggleDrawer()
    NavigationActions.themeScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.menuSection}>
          <Image source={Images.logo} style={styles.logo} />
          <DrawerButton text='Home' selected={this.state.active == 'home'} onPressDelegate={this.handlePressHome} />
          <DrawerButton text='Style guide' selected={this.state.active == 'components'} onPressDelegate={this.handlePressComponents} />
          <DrawerButton text='Usage Examples' selected={this.state.active == 'usage'} onPressDelegate={this.handlePressUsage} />
          <DrawerButton text='API Testing' selected={this.state.active == 'api'} onPressDelegate={this.handlePressAPI} />
        </View>
        <View style={styles.menuSection}>
          <DrawerButton text='Settings' selected={this.state.active == 'settings'} onPressDelegate={this.handlePressSettings} />
          <DrawerButton text='Themes' selected={this.state.active == 'theme'} onPressDelegate={this.handlePressThemes} />
        </View>

      </ScrollView>
    );
  }

  constructor(props) {
    super(props);

    this.handlePressComponents = this.handlePressComponents.bind(this);
    this.handlePressUsage = this.handlePressUsage.bind(this);
    this.handlePressAPI = this.handlePressAPI.bind(this);
    this.handlePressSettings = this.handlePressSettings.bind(this);
    this.handlePressThemes = this.handlePressThemes.bind(this);
    this.handlePressHome = this.handlePressHome.bind(this);

    this.state = {
      active: 'home'
    };
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
