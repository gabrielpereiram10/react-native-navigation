import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native"
import { ScreenBParams } from "../@types/route-params";

export function ScreenB() {
    const navigation = useNavigation()
    const route = useRoute()
    const { text } = route.params as ScreenBParams

    return (
        <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 24, color: "white" }}>
                {text}
            </Text>

            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}