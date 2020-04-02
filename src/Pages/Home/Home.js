import React from 'react';

import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import { AppLoading } from 'expo'

import { useFonts } from '@use-expo/font'

import Pokeball from './Assets/pokeball.png'
import pokemonGo from './Assets/pokemonGo.jpg'
import tcgo from './Assets/tcgo.jpg'
import swordShield from './Assets/swordShield.jpg'

import styles from './styles';

export default function Home() {

  let [fontsLoaded] = useFonts({
    'TTCommons': require('../../../assets/font/TTCommons-Regular.ttf'),
    'TTCommons-Bold': require('../../../assets/font/TTCommons-Bold.ttf'),
    'TTCommons-Medium': require('../../../assets/font/TTCommons-Medium.ttf')
  })

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  } else {
      return(
        <>
          <ScrollView
            vertical={true}
          >
          <View style={styles.container}>
            <Image source={Pokeball} style={styles.background}/>
              <View style={styles.content}>
                <Text style={{ fontFamily: 'TTCommons-Bold', fontSize: 37, }}>What Pokemon</Text>
                <Text style={{ fontFamily: 'TTCommons-Bold', fontSize: 37, }}>are you looking for?</Text>

                <View style={styles.searchContainer}>
                  <FontAwesome name='search' color="#000" size={20} style={{marginLeft: 5}} />
                  <TextInput style={{width: '100%', marginLeft: 20}} placeholder='Search Pokemon, Move, Ability etc.' />
                </View>
            
              <View style={styles.menu}>
                <TouchableOpacity style={[styles.card, { backgroundColor: "#4EC2A6", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Pokedex</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, { backgroundColor: "#F7776A", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Movies</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>

                </View>
              <View style={styles.menu2}>
                <TouchableOpacity style={[styles.card, { backgroundColor: "#58A9F4", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Abilities</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, { backgroundColor: "#FECF4B", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Items</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>
              </View> 

              <View style={styles.menu2}>
                <TouchableOpacity style={[styles.card, { backgroundColor: "#7C528C", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Locations</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, { backgroundColor: "#B1736D", }]}>
                  <View  style={styles.backgroundCard1}/>
                    <Text style={{ fontFamily: 'TTCommons-Medium', fontSize: 28, color: "#FFF", position: 'absolute', left: 20, bottom: '65%' }}>Type Charts</Text>
                  <Image source={Pokeball} style={styles.backgroundCard2}/>
                </TouchableOpacity>
              </View> 
          </View>
        </View>
        
        <View style={styles.newsContainer}>
          <View style={styles.titleContainer}>
            <Text style={[styles.newsTitle,{ fontFamily: 'TTCommons-Bold' }]}>Pokémon News</Text>
            <Text style={[styles.newsLink, { fontFamily: 'TTCommons'}]}>View All</Text>
          </View>

        
            <View style={styles.noticeContainer}>
              <View style={styles.noticeText}>
                <Text style={[styles.noticeTitle, { fontFamily: 'TTCommons-Bold' }]}>Pokemon GO's Latest Updates</Text>
                <Text style={[styles.noticeDate, { fontFamily: 'TTCommons' }]}>04, Apr 2020</Text>
              </View>
              <Image source={pokemonGo} style={styles.noticeImage} />
            </View>

            <View style={styles.noticeContainer}>
              <View style={styles.noticeText}>
                <Text style={[styles.noticeTitle, { fontFamily: 'TTCommons-Bold' }]}>Play The Pokemon TCG Online</Text>
                <Text style={[styles.noticeDate, { fontFamily: 'TTCommons' }]}>04, Apr 2020</Text>
              </View>
              <Image source={tcgo} style={styles.noticeImage} />
            </View>

            <View style={styles.noticeContainer}>
              <View style={styles.noticeText}>
                <Text style={[styles.noticeTitle, { fontFamily: 'TTCommons-Bold' }]}>Tips For You Galar Region Travel</Text>
                <Text style={[styles.noticeDate, { fontFamily: 'TTCommons' }]}>04, Apr 2020</Text>
              </View>
              <Image source={swordShield} style={styles.noticeImage} />
            </View>
        </View>
          </ScrollView>
      </>
    )
  }
}
