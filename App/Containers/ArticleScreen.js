/**
* The default/home screen
* @class ArticleScreen
*
* @flow
*/
import React from 'react';
import { ScrollView, Text, Image, View, Button, Linking } from 'react-native';
import { Images, Colors, Fonts, Metrics } from '../Themes';
import HorizontalLine from '../Components/HorizontalLine';
import Hyperlink from '../Components/Hyperlink';
import BulletPoints from '../Components/BulletPoints';

// Styles
import styles from './Styles/ArticleScreenStyle';

export default class ArticleScreen extends React.Component {

    renderContent() {
        return this.props.content.map((item, i) => (
            this.renderItem(item, i)
        ))
    }

    renderItem(item, i){
        switch (item.type){
            case 'heroImage':
                return <View key={i} style={styles.heroImageContainer}  elevation={5}><Image source={item.content} style={styles.articleHeroImage}></Image></View>
            case 'articleTitle':
                return <View key={i} style={styles.articleTitleWrapper}><Text style={styles.articleTitle}>{item.content}</Text></View>
            case 'articleSubTitle':
                return (
                <View key={i}>
                    <View style={styles.articleSubTitleWrapper}>
                        <Text style={styles.caption}>{item.content}</Text>
                    </View>
                    <View style={[{paddingTop: Metrics.baseMargin*3, paddingBottom: Metrics.baseMargin*2}, styles.articleWrapper]}>
                        <HorizontalLine lineColor={Colors.horizontalLineColor}/>
                    </View>
                </View>);
            case 'paragraph':
                return <Text key={i} style={styles.paragraphText}>{item.content}</Text>
            case 'hyperlink':
                return <View key={i} style={styles.articleWrapper}><Hyperlink fontFamily={Fonts.type.medium} textColor={Colors.brandColor1} text={item.content} link={item.link}/></View>
            case 'header':
                return <View key={i} style={styles.articleWrapper}><Text style={styles.h2}>{item.content}</Text></View>
            case 'image':
                return <View key={i} style={styles.articleImageContainer}><Image source={item.content} style={styles.articleImage}></Image></View>
            case 'bullets':
                return <View key={i} style={styles.articleWrapper}><BulletPoints bulletColor={Colors.brandColor1} margin={Metrics.baseMargin} fontWeight={Fonts.weight.h2} bulletsText={item.content}></BulletPoints></View>
            case 'caption':
                return <Text key={i} style={styles.caption}>{item.content}</Text>
        }
    }

    renderParagraph(data) {
      return <Text style={styles.paragraphText}>{data}</Text>
    }

    render () {
        return (
            <View style={[styles.mainContainer, {backgroundColor: Colors.background2}]}>
                <ScrollView style={styles.container}>
                    {this.renderContent()}
                </ScrollView>
            </View>
        )
    }
}

ArticleScreen.propTypes = {
    content: React.PropTypes.array
};

ArticleScreen.defaultProps = {
    content: []
};
