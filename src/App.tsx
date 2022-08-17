import {FC} from "react";
import {registerRootComponent} from "expo";
import {Provider} from "react-redux";
import store from "./store";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PhotosScreen from "./screens/Photos/PhotosScreen/PhotosScreen";
import ScreenNames from "./utils/constants/screenNames";
import PhotoScreen from "./screens/Photo/PhotoScreen/PhotoScreen";

const Stack = createNativeStackNavigator();

const App: FC = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName={ScreenNames.Photos}>
					<Stack.Screen name={ScreenNames.Photos} component={PhotosScreen} />
					<Stack.Screen name={ScreenNames.Photo} component={PhotoScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default registerRootComponent(App);
