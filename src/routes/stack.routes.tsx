import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScreenA } from "../screens/ScreenA"
import { ScreenB } from "../screens/ScreenB"
import { TabRoutes } from "./tab.routes"

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
	return (
		<Navigator>
			<Screen
				name="tabRoutes"
				options={{
					headerShown: false
				}}
				component={TabRoutes}
			/>
			<Screen
				name="screenA"
				options={{
					headerShown: false
				}}
				component={ScreenA}
			/>
			<Screen
				name="screenB"
				options={{
					title: "Tela B",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "grey"
					},
					headerTintColor: "white"
				}}
				component={ScreenB}
			/>
		</Navigator>
	)
}