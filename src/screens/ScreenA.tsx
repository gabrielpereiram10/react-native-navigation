import React from "react";
import { Button, View } from "react-native"
import { useNavigation } from "@react-navigation/native";


export function ScreenA() {
    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate("screenB", { text: "Alguma coisa!" })
    }

    return (
        <View style={{ flex: 1, backgroundColor: "red", justifyContent: "center" }}>
            <Button
                title="Ir para a tela B"
                onPress={openScreen}
            />
        </View>
    )
}