import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

import {TextInput, Card, Title, Paragraph} from 'react-native-paper';
import { PokemonCard } from '../../modules/pokemons/cards';

import {api} from './';

const imgF = require('../../assets/Images/PokeballFundo.png');

const Sort = require('../../assets/Icons/Vectorsort.png');

const Filter = require('../../assets/Icons/Vectorfilter.png');

export function Home() {
  const [pokemon, setPokemon] = useState();
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
        data={pokemon}
        renderItem={({item, index}) => (
          <PokemonCard key={index} pokemon={item}/>
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
              <Pressable>
                <Image source={Sort} style={styles.icons} />
              </Pressable>
              <Pressable>
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
                mode="outlined"
                label="Name or ID"
                placeholder="Pesquisa"
                onChangeText={() => text}
                selectionColor="#C41717"
                outlineColor="black"
                activeOutlineColor="black"
                underlineColor="transparent"
                right={<TextInput.Icon name="eye" />}
              />
            </View>
          </>
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
      />
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
    width: 350,
    justifyContent: 'center',
    marginLeft: 15,
    marginBottom: 15,
  },
  place: {
    size: 20,
    color: 'black',
  },
  card:{
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 350,
    height: 125,
    backgroundColor: '#EA5D60'
  },
  cardItem:{
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtCard:{
    marginTop: 15,
    textTransform: 'capitalize',
  }
});
