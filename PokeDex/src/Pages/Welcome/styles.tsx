import React from 'react';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF6568",
        color: 'black',
    },
    content: {
        height: "66%",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: "34%",
        backgroundColor: "white",

    },
    animation: {
        width: 230,
        height: 230,
    },
    titulo: {
        fontFamily: "Pokemon Solid",
        textAlign: "center",
        fontSize: 50,
        color: "#FF6568",
        marginTop: 30,
        textShadowColor: "rgba(0, 0, 0, 0.28)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#FF6568",
        borderRadius: 30,
        width: 150,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        elevation: 15,
        shadowColor: "52006A",
        marginTop: 20,
    },
    buttonIcon: {
        height: 37,
        width: 37,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        marginLeft: 10,
        textAlign: "center",
        fontSize: 19,
        fontWeight: "bold",
    },
})
