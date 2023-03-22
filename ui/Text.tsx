import {
  Text as TextRN,
  TextProps as TextProps,
  StyleSheet,
} from "react-native";
import colors from "../theme/colors";
export function Text({ ...props }: TextProps) {
  return <TextRN {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white[500],
  },
});
