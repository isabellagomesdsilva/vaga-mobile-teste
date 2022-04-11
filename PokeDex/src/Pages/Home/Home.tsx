import { PrivateValueStore } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
  StatusBar,
} from 'react-native';

import {PokemonCard} from '../../modules/pokemons/cards';

import {api} from './';

const imgF = require('../../assets/Images/PokeballFundo.png');

const Sort = require('../../assets/Icons/Vectorsort.png');

const Filter = require('../../assets/Icons/Vectorfilter.png');

export function Home() {
  const [pokemonSelect, setPokemonSelect] = useState()

  const handleInput = (value: string) => {
    setPokemonSelect(pokemon.filter(pokemon => pokemon.name.toLowerCase().match(value.toLowerCase())))
  }
  const handleOrderClick = () => {};

  const handleTypeClick = () => {};

  const [pokemon, setPokemon] = useState<any>([]);
  useEffect(() => {
    const loadPokemon = async () => {
      const {data} = await api.get('pokemon/?limit=20&offset=0');
      setPokemon(data.results);
    };
    loadPokemon();
  }, []);

  return (
    <View style={[styles.container, {flex: 1}]}>
      <FlatList
        data={pokemonSelect || pokemon}
        renderItem={({item, index}) => (
          <PokemonCard key={index} pokemon={item} />
        )}
        ListHeaderComponent={() => (
          <>
            <View>
              <ImageBackground
                source={imgF}
                resizeMode="contain"
                style={styles.imgF}></ImageBackground>
            </View>
            <View style={styles.containerIcons}>
              <Pressable onPress={handleOrderClick}>
                <Image source={Sort} style={styles.icons} />
              </Pressable>
              <Pressable onPress={handleTypeClick}>
                <Image source={Filter} style={styles.icons} />
              </Pressable>
            </View>
            <View>
              <Text style={styles.titulo}>Pokédex</Text>
              <Text style={styles.subTitulo}>
                Procure por seu Pokémon favorito pelo nome ou usando o número
                dele.
              </Text>
              <TextInput
                style={styles.Input}
                placeholder="Pesquise um Pokémon"
                onChange={() => console.log(pokemonSelect)}
                onChangeText={ handleInput}
              />
            </View>
          </>
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  texto: {
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  imgF: {
    width: '100%',
    height: 190,
    backgroundColor: '#F2F2F2',
  },
  titulo: {
    marginTop: -17,
    marginBottom: 2,
    fontSize: 40,
    color: 'black',
    marginLeft: 15,
    fontFamily: 'SF-Pro-Display-Medium',
  },
  subTitulo: {
    marginTop: -15,
    marginLeft: 15,

    color: 'black',
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Light',
  },
  icons: {
    marginTop: 10,
    width: 22,
    height: 20,
    marginRight: 10,
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  Input: {
    backgroundColor: '#F7F9F9',
    width: 320,
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 5,
    elevation: 8,
    fontSize: 17,
    paddingLeft: 12,
  },
});
