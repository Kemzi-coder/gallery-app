import React, {FC} from "react";
import {registerRootComponent} from "expo";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import store from "./store";
import IndicatorContainer from "./components/IndicatorContainer/IndicatorContainer";
import Navigator from "./components/Navigation/Navigator";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const App: FC = () => {
	const [isFontsLoaded] = useFonts({
		"OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
		"OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf")
	});

	if (!isFontsLoaded) {
		return (
			<IndicatorContainer>
				<ActivityIndicator size="large" />
			</IndicatorContainer>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Navigator />
				<ErrorModal />
			</NavigationContainer>
		</Provider>
	);
};

export default registerRootComponent(App);
