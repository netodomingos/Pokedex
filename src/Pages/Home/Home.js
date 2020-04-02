import React from 'react';

import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import Pokeball from './Assets/pokeball.png'

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
        <Image source={Pokeball} style={styles.background}/>
      <View style={styles.content}>
        <Text style={styles.title}>What Pokemon</Text>
        <Text style={styles.title}>are you looking for?</Text>

        <View style={styles.searchContainer}>
          <FontAwesome name='search' color="#000" size={20} style={{marginLeft: 5}} />
          <TextInput style={{width: '100%', marginLeft: 20}} placeholder='Search Pokemon, Move, Ability etc.' />
        </View>
        
      <View style={styles.menu}>
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Pokedex</Text>
          <Image source={Pokeball} style={styles.backgroundCard2}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Moves</Text>
          <Image source={Pokeball} style={styles.backgroundCard2}/>
        </TouchableOpacity>

      </View>

      <View style={styles.menu2}>
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Abilities</Text>
          <Image source={Pokeball} style={styles.backgroundCard2}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Items</Text>
          <Image source={Pokeball} style={styles.backgroundCard2}/>
        </TouchableOpacity>
      </View>
       


      </View>
    </View>
  );
}
