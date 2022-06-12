import { StyleProp, View, ViewStyle } from "react-native";
import { scaledSize } from "../dimensions";

const BWSeparator = (props: { style?: StyleProp<ViewStyle> }) => {
    return (
        <View
            style={[
                {
                    height: scaledSize(0.1),
                    borderBottomColor: "lightgray",
                    borderBottomWidth: scaledSize(0.1),
                    width: "80%",
                    alignSelf: "flex-end",
                    marginVertical: scaledSize(8),
                },
                props.style,
            ]}
        />
    );
};

export default BWSeparator;
