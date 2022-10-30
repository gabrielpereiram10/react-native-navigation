import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import { ScreenA } from "../screens/ScreenA"
import { ScreenB } from "../screens/ScreenB"

const { Screen, Navigator } = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray"
            }}
        >
            <Screen
                name="screenA"
                component={ScreenA}
                options={{
                    headerShown: false,
                    tabBarLabel: "Tela A",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Screen
                name="screenB"
                component={ScreenB}
                options={{
                    tabBarLabel: "Novo",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Navigator>
    )
}