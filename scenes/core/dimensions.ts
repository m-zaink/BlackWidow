import { Dimensions } from "react-native";

export const scaledSize = (size: Number) => {
    const { width, height } = Dimensions.get("window");

    const baseWidth = 390;
    const baseHeight = 844;

    const scaleWidth = width / baseWidth;
    const scaleHeight = height / baseHeight;
    const scale = Math.min(scaleWidth, scaleHeight);

    return Math.ceil(size.valueOf() * scale);
};
