import HTML from "react-native-renders-html";
import { Dimensions } from "react-native";

export const HtmlVisualizer = ({ htmlContent = "", tagsStyles = {} }) => {
  return (
    <HTML
      tagsStyles={{ p: { padding: 1, fontWeight: "bold" }, ...tagsStyles }}
      html={htmlContent}
      imagesMaxWidth={Dimensions.get("window").width}
    />
  );
};
