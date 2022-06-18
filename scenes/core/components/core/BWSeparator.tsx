import { StyleProp, View, ViewStyle } from "react-native";
import { scaledSize } from "../../dimensions";

const BWSeparator = (props: { style?: StyleProp<ViewStyle> }) => {
    return (
        <View
            style={[
                {
                    height: scaledSize(0.1),
                    borderBottomColor: "lightgray",
                    borderBottomWidth: scaledSize(0.1),
                    opacity: 0.6,
                    width: "90%",
                    alignSelf: "flex-end",
                    marginVertical: scaledSize(4),
                },
                props.style,
            ]}
        />
    );
};

export default BWSeparator;
