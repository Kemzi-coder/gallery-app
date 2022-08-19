import React, {memo} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Colors from "../../utils/constants/colors";
import ScreenNames from "../../utils/constants/screenNames";
import PhotosScreen from "../../screens/Photos/PhotosScreen/PhotosScreen";
import PhotoScreen from "../../screens/Photo/PhotoScreen/PhotoScreen";

const Stack = createNativeStackNavigator();

const Navigator = memo(() => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: Colors.Lighter
			},
			headerShadowVisible: false,
			headerTitleStyle: {
				fontFamily: "OpenSans-Bold",
				fontSize: 32,
				color: Colors.Primary
			}
		}}
		initialRouteName={ScreenNames.Photos}
	>
		<Stack.Screen name={ScreenNames.Photos} component={PhotosScreen} />
		<Stack.Screen name={ScreenNames.Photo} component={PhotoScreen} />
	</Stack.Navigator>
));

export default Navigator;
