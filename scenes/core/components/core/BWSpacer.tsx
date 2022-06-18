import { View } from "react-native";

export const BWSpacer = () => {
    return <View style={{ flex: 1 }} />;
};

export const BWVerticalSpacer = () => {
    return <View style={{ flexDirection: "column", flex: 1 }} />;
};

export const BWHorizontalSpacer = () => {
    return <View style={{ flexDirection: "row", flex: 1 }} />;
};

export const BWSizeBox = (props: { height?: Number; width?: Number }) => {
    return (
        <View
            style={{
                height: props.height?.valueOf(),
                width: props.width?.valueOf(),
            }}
        />
    );
};
