/**
 * Router sets up the navigable views as well as the navigation drawer and navBar
 * Though we are overriding both drawer and navbar with their own views
 *
 * **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 * **************************
 * @flow
 */
import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyle';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen';
import AllComponentsScreen from '../Containers/AllComponentsScreen';
import UsageExamplesScreen from '../Containers/UsageExamplesScreen';
import ListviewExample from '../Containers/ListviewExample';
import ListviewGridExample from '../Containers/ListviewGridExample';
import ListviewSectionsExample from '../Containers/ListviewSectionsExample';
import APITestingScreen from '../Containers/APITestingScreen';
import LoginScreen from '../Containers/LoginScreen';
import FormElementsExample from '../Containers/FormElementsExample';
import ThemeScreen from '../Containers/ThemeScreen';
import ArticleScreen from '../Containers/ArticleScreen';
import CardGridList from '../Containers/CardGridList';


class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='Awesome mobile base project' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Style guide' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='right ex' onRight={() => window.alert('Example Pressed')} />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='login' component={LoginScreen} title='Sign in yar' />
            <Scene key='themeScreen' component={ThemeScreen} title='Themes used in this app' />
            <Scene key='formElementsExample' component={FormElementsExample} title='Settings' />
            <Scene key='articleScreen' component={ArticleScreen} title='Article' />
            <Scene key='cardGridList' component={CardGridList} title='' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
