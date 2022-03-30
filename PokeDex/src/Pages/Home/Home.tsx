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

  const [type, setType] = useState();
  useEffect(() => {
    const tipo = async () => {
      const {data} = await api.get('type/');
      setType(data.results);
    };
    tipo();
  }, []);

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
        ListHeaderComponent = {() => (
          <><View>
            <ImageBackground
              source={imgF}
              resizeMode="contain"
              style={styles.imgF}></ImageBackground>
          </View><View style={styles.containerIcons}>
              <Pressable>
                <Image source={Sort} style={styles.icons} />
              </Pressable>
              <Pressable>
                <Image source={Filter} style={styles.icons} />
              </Pressable>
            </View><View>
              <Text style={styles.titulo}>Pokédex</Text>
              <Text style={styles.subTitulo}>
                Procure por seu Pokémon favorito pelo nome ou usando o número dele.
              </Text>
            </View></>
        )}
        ItemSeparatorComponent = {() => (
          <View style={{height: 20}}></View>
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
    marginBottom: 20,
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
});
