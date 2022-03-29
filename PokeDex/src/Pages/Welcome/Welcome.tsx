import React from 'react';
import { View, Text, Pressable, Image } from "react-native";
import { styles } from './';
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Home } from "../Home/";


const imgIcon = require("../../assets/Images/Pokeball.png");
const pokeAnimation = require('./pokeAnimation.json');

type abc = StackNavigationProp<Home>

type Home = {
    "Home": undefined,
}

export function Welcome() {
    const { navigate } = useNavigation<abc>();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.animation}>
                    <AnimatedLottieView autoPlay source={pokeAnimation} loop />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.titulo}>Bem Vindos</Text>
                <Pressable onPress={() => navigate('Home')} style={styles.button}>
                    <Image source={imgIcon} style={styles.buttonIcon} />
                    <Text style={styles.buttonLabel}>Home</Text>
                </Pressable>
            </View>
        </View>
    )
}
