import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StateWiseStyleCallback, VoidCallback } from "../../types";
import BWPressable from "./BWPressable";

const BWIconPressable = (props: {
    icon: ReactNode;
    style?: StyleProp<ViewStyle> | StateWiseStyleCallback<{ pressed: Boolean }>;
    onPress?: VoidCallback;
}) => {
    return (
        <BWPressable
            onPress={props.onPress}
            style={
                props.style ||
                (({ pressed }) =>
                    pressed ? { opacity: 0.3 } : { opacity: 1.0 })
            }
        >
            {props.icon}
        </BWPressable>
    );
};

export default BWIconPressable;
