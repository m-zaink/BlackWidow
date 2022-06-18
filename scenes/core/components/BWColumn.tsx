import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

const BWColumn = (props: { children: ReactNode | ReactNode[]; style?: StyleProp<ViewStyle> }) => {
    return <View style={[props.style, { flexDirection: "column" }]}>{props.children}</View>;
};

export default BWColumn;
