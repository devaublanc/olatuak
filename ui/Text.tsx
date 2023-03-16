import { Text as TextRN, TextProps as TextProps } from "react-native";
import colors from "../theme/colors";
export function Text({ ...props }: TextProps) {
  return <TextRN style={{ color: colors.white[500] }} {...props} />;
}
