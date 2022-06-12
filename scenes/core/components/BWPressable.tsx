import { Pressable, PressableProps } from "react-native";

type BWPressableProps = PressableProps;

const BWPressable = (props: BWPressableProps) => {
    return <Pressable {...props}>{props.children}</Pressable>;
};

export default BWPressable;
