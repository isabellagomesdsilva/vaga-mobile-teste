import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {api} from './';

export function Home() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const loadPokemon = async () => {
      const {data} = await api.get('pokemon/?limit=20&offset=0');
      setPokemon(data.results);
    };
    loadPokemon();
  }, []);

  const imgPoke = (url: string) => {
    let resultado = url.split('/');
    const id = resultado[6];
    if (id) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(
        3,
        '0',
      )}.png`;
    }
    return '';
  };

  return (
    <View style={[styles.container, {flex: 1}]}>
      <FlatList
        data={pokemon}
        renderItem={({item, index}) => (
          <View style={{width: 300}} key={index}>
            <Text>{item.name}</Text>
            <Image style={[styles.img]} source={{uri: imgPoke(item.url)}} />
          </View>
        )}
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
    width: 50,
    height: 50,
  },
});
