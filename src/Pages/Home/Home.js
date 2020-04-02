import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text>What Pokemon</Text>
        <Text>are you looking for?</Text>

        <View>
          <FontAwesome name='search' color="#000" size={20} />
          <TextInput/>
        </View>


      </View>
    </View>
  );
}
