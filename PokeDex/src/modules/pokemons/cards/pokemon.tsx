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
interface Types {
  slot: number;
  type: {name: string; url: string};
}

const typesColors = {
  bug: '#8BD674',
  dark: '#6F6E78',
  dragon: '#7383B9',
  eletric: '#F2CB55',
  fairy: '#EBA8C3',
  fighting: '#EB4971',
  fire: '#FFA756',
  flying: '#83A2E3',
  ghost: '#8571BE',
  grass: '#8BBE8A',
  ground: '#F78551',
  ice: '#61CEC0',
  normal: '#B5B9C4',
  poison: '#9F6E97',
  psychic: '#FF6568',
  rock: '#BAAB82',
  steel: '#4C91B2',
  water: '#58ABF6',
};

const backgroundColors = {
  bug: '#8CB330',
  dark: '#58575F',
  dragon: '#0F6AC0',
  eletric: '#EED535',
  fairy: '#ED6EC7',
  fighting: '#D04164',
  fire: '#FD7D24',
  flying: '#748FC9',
  ghost: '#556AAE',
  grass: '#62B957',
  ground: '#DD7748',
  ice: '#61CEC0',
  normal: '#9DA0AA',
  poison: '#A552CC',
  psychic: '#EA5D60',
  rock: '#BAAB82',
  steel: '#417D9A',
  water: '#4A90DA',
};

export function PokemonCard({pokemon}: PokemonCardProps) {
  const [pokemonTypes, setPokemonTypes] = useState<Types[]>([]);
  const [pokemonId, setPokemonId] = useState<number>();
  useEffect(() => {
    const getPokemon = async () => {
      const {data} = await api.get(pokemon.url);
      setPokemonTypes(data.types);
      setPokemonId(data.id);
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
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            typesColors[pokemonTypes?.[0]?.type?.name || 'normal'],
        },
      ]}>
      <View>
        <Image source={imgFText} style={styles.imgFText} />
        <Text style={styles.txtId}>#{pokemonId}</Text>
        <Title style={styles.titleCard}>{pokemon.name}</Title>

        <View style={styles.Type}>
          {pokemonTypes.map(({type}, index) => (
            <View
              style={[
                styles.boxType,
                {
                  backgroundColor:
                    backgroundColors[pokemonTypes?.[0]?.type?.name || 'normal'],
                },
              ]}>
              <Text key={index} style={styles.txtType}>
                {type.name}
              </Text>
            </View>
          ))}
        </View>
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
  titleCard: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 25,
    fontFamily: 'SF-Pro-Display-Bold',
    top: 6,
    left: 10,
  },
  imgFCard: {
    width: 137,
    height: 124,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 185,
  },
  img: {
    width: 150,
    height: 150,
    bottom: 25,
    left: 5,
  },
  imgFText: {
    position: 'absolute',
    left: 85,
    bottom: 68,
  },
  txtType: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 17,
    textTransform: 'capitalize',
    color: 'white',
    textAlign: 'center',
  },
  Type: {
    flexDirection: 'row',
  },
  boxType: {
    borderRadius: 7,
    width: 70,
    marginTop: 10,
    marginLeft: 10,
  },
  txtId: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 15,
    marginBottom: -10,
    marginLeft: 10,
    color: 'white',
  },
});
