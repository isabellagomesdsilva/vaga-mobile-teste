import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {Title} from 'react-native-paper';
import {api} from '../../../Pages/Home';

const imgFCard = require('../../../assets/Images/PokeballCard.png');
const imgFText = require('../../../assets/Images/dotsCard.png');
interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

export function PokemonCard({pokemon}: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const getPokemon = async () => {
      const {data} = await api.get(pokemon.url);
      setPokemonData(data.types);
    };
    getPokemon();
  }, [pokemon]);

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
    <View style={styles.card}>
      <View>
        <Image source={imgFText} style={styles.imgFText} />
        <Title style={styles.txtCard}>{pokemon.name}</Title>

        {/*<Text style={{color: 'black'}}>{JSON.stringify(pokemonData)}</Text>*/}
      </View>

      <ImageBackground source={imgFCard} style={styles.imgFCard}>
        <View>
          <Image style={[styles.img]} source={{uri: imgPoke(pokemon.url)}} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 320,
    height: 115,
    backgroundColor: '#EA5D60',
    borderRadius: 18,
    marginTop: 20,
  },
  txtCard: {
    marginTop: 15,
    textTransform: 'capitalize',
    top: 28,
    color: 'white',
    fontSize: 25,
    left: 20,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  imgFCard: {
    width: 137,
    height: 124,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    left: 195,
    bottom: 55,
  },
  img: {
    width: 150,
    height: 150,
    bottom: 20,
    right: 5,
  },
  imgFText: {
    top: 45,
    left: 90,
  },
});
