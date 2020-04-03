import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import axios from 'axios'

import { AppLoading } from 'expo'

import { Ionicons } from '@expo/vector-icons'

import { useFonts } from '@use-expo/font'

import Pokeball from '../../global/Assets/pokeball.png'

import LoadingGif from './Assets/voltorb.gif'

import styles from './styles';

export default function Pokedex() {
  const [ api, setApi ] = useState([])
  const [ loading, setLoading ] = useState(false)
  
  async function callPokemonApi(){
    const response = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')

    setApi(response.data.pokemon)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    callPokemonApi()
  }, [])

  let [fontsLoaded] = useFonts({
    'TTCommons': require('../../../assets/font/TTCommons-Regular.ttf'),
    'TTCommons-Bold': require('../../../assets/font/TTCommons-Bold.ttf'),
    'TTCommons-Medium': require('../../../assets/font/TTCommons-Medium.ttf')
  })

  const Fire = '#F7776A'
  const grass = '#4EC2A6'
  const water = '#58A9F4'
  const electric = '#FECF4B'
  const poison = '#7C528C'
  const bug = '#9daa19'
  const ground = '#B1736D'
  const normal = '#F1BF9B'

  function pokemonType(type){
    if(type == 'Fire'){
      return Fire 
    }
    else if (type == 'Grass'){
      return grass
    }
    else if (type == 'Water'){
      return water
    }
    else if (type == 'Electric'){
      return electric
    }
    else if (type == 'Poison'){
      return poison
    }
    else if (type == 'Bug'){
      return bug
    }
    else if (type == 'Ground'){
      return ground
    }
    else{
      return normal
    }
  }



    if(!fontsLoaded) {
      return(
        <AppLoading />
      )
    } 
    else {
      return (
        <View style={styles.container}>
          <Image source={Pokeball} style={styles.background}/>

          <TouchableOpacity style={styles.arrowBack}>
            <Ionicons name='ios-arrow-round-back' color='#000' size={40}/>
          </TouchableOpacity>

          <Text style={[styles.title, { fontFamily: 'TTCommons-Bold' }]}>Pokedex</Text>

              <View style={styles.content}>
                {
                  loading ? (
                    <Image source={LoadingGif} />
                  ) : (
                    <FlatList 
                      data={api}
                      keyExtractor={api => api.id}
                      numColumns={2}
                      renderItem={({item}) => (
                        <TouchableOpacity style={[styles.pokemonCard, { backgroundColor: `${pokemonType(item.type[0])}` }]}>
                          <View style={styles.cardText}>
                            <Text style={[styles.pokemonName, { fontFamily: 'TTCommons-Bold' }]}>{item.name}</Text>
                              <View style={styles.pokemonTypeCard}>
                                <Text style={[styles.pokemonType , { fontFamily: 'TTCommons-Medium' }]}>{item.type[0]}</Text>
                              </View>
                                {
                                  item.type[1] ? (
                                    <View style={styles.pokemonTypeCard}>
                                      <Text style={[styles.pokemonType , { fontFamily: 'TTCommons-Medium' }]}>{item.type[1]}</Text>
                                    </View>
                                ) : (
                                  null
                                )
                              }
                          </View>
                          <View>
                            <Image source={Pokeball} style={styles.backgroundCard}/>
                            <Image source={{ uri: item.img}} style={styles.pokemonImage}/>
                          </View>
                        </TouchableOpacity>
                      )}
                    />
                  )
                }
              </View>
      </View>
    );
  }
}

