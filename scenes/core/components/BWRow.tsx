import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

const BWRow = (props: {
    children: ReactNode | ReactNode[];
    style?: StyleProp<ViewStyle>;
}) => {
    return (
        <View style={[props.style, { flexDirection: "row" }]}>
            {props.children}
        </View>
    );
};

export default BWRow;
