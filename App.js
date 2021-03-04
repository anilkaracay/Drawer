import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native';

export default class App extends Component {
  state = {
    onDrawerOpen: null
  }

  render() {
    var drawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftTop}/>
      <View style={styles.leftBottom}>
        <View style={{borderBottomWidth:1,borderColor:'rgb(247,247,247)'}}>
          <Text style={{fontSize:16,marginLeft:21,marginVertical:22,}}>Filtrele</Text>
        </View>
      </View>
    </View>);

    var customStyles = {
      drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      mask: {},
      main: {}
    };
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        style={styles.container}
        drawerWidth={250}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        customStyles={{drawer: styles.drawer}}
        drawerPosition={Drawer.positions.Right}
        onDrawerOpen={() => {
          console.log('Drawer is opened');
        }}
        onDrawerClose={() => {
          console.log('Drawer is closed')
        }}
        easingFunc={Easing.ease}
      >
        <View style={styles.content}>
          <TouchableOpacity onPress={()=>this._drawer.openRightDrawer()}>
            <Text style={{fontSize:45}}>
              Drawer
            </Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor:'rgb(255,255,255)'
  },

});
