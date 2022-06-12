import { View } from "react-native";

const BWSpacer = () => {
    return <View style={{ flex: 1 }} />;
};

const BWSizeBox = (props: { height?: Number; width?: Number }) => {
    return (
        <View
            style={{
                height: props.height?.valueOf(),
                width: props.width?.valueOf(),
            }}
        />
    );
};

export default BWSpacer;
