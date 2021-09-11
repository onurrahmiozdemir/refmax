import React from 'react';
import { View, TouchableOpacity, Text, ViewBase } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Screen/Theme/Colors';
import auth from '@react-native-firebase/auth';
import Styles from './styles';

const TabCustomerComponent = props => {

  const accountControl = (navigate: string) => {
    if (auth().currentUser) {
      props.navigation.navigate(navigate)
    }
    else {
      props.navigation.navigate('Login', { to: navigate })
    }
    console.log('girişşşşş', auth().currentUser)
  }


  return (
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('FirstPage')}>
        <Icon
          name={'md-grid-outline'}
          color={props.state.index === 0 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('Search')}>
        <Icon
          name="ios-search-outline"
          color={props.state.index === 1 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => { accountControl('Share') }}>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 222,
            backgroundColor: 'gray',
          }}></View>
        {/* <Icon name={'ios-add-circle'} color="#626262" size={40} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => accountControl('ChatPage')}>
        <Icon
          name={'ios-chatbubble-ellipses-outline'}
          color={props.state.index === 2 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => accountControl('FavoritePage')}>
        <IconMI
          name={'favorite-border'}
          color={props.state.index === 3 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabCustomerComponent;
