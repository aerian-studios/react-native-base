import React from 'react';
import { Text, View, TextInput, Linking, ListView } from 'react-native';

export default class BulletPoints extends React.Component {
    constructor(props) {
        super(props);

        this.renderBullet = this.renderBullet.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }).cloneWithRows(this.props.bulletsText),
        };
    }

    renderBullet(data) {
      return (
        <Text style={{lineHeight: 30, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize, color: this.props.textColor, fontWeight: this.props.fontWeight}}>
            <Text style={{fontSize: this.props.fontSize, color: this.props.bulletColor, marginRight: 50}}>{`\u2022`}&nbsp;</Text>
            {data}
        </Text>
      );
    }

    render() {
        return (
            <ListView
              style={{margin: this.props.margin}}
              dataSource={this.state.dataSource}
              renderRow={this.renderBullet}
            />
        )
    }
}

BulletPoints.propTypes = {
    fontFamily: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    link: React.PropTypes.string,
    bulletColor: React.PropTypes.string,
    margin: React.PropTypes.number,
    bulletsText: React.PropTypes.array
};

BulletPoints.defaultProps = {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 18,
    textColor: 'rgb(3,3,3)',
    bulletColor: '#8F8E94',
    margin: 20,
    bulletsText: []
};
