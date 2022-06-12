import { StyleProp, ViewStyle } from "react-native";

export type VoidCallback = () => void;

export type StateWiseStyleCallback<State> = (
    state: State,
) => StyleProp<ViewStyle>;
