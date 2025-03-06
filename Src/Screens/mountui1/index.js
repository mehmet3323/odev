import React from 'react';
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Travel</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('mountui2');
        }} >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/921/921439.png' }}
          style={styles.icon}
        />
     </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Find Your Dream</Text>
      <Text style={styles.subtitle1}>Destination With Us</Text>
    </View>
  );
};

export default App;
