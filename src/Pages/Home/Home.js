import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What Pokemon</Text>
        <Text style={styles.title}>are you looking for?</Text>

        <View style={styles.searchContainer}>
          <FontAwesome name='search' color="#000" size={20} />
          <TextInput style={{width: '100%', marginLeft: 20}} placeholder='Search Pokemon, Move, Ability etc.' />
        </View>


      </View>
    </View>
  );
}
