import { StyleSheet } from "react-native";
import { colorPalette } from "../../styles/colorPalette";


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colorPalette.lightGreen,
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginVertical: 8,
      borderWidth: 1,
      borderColor: colorPalette.primaryGreen,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colorPalette.darkGreen,
      paddingVertical: 4,
    },
    clearButton: {
      paddingHorizontal: 8,
      justifyContent: 'center',
    },
    clearText: {
      fontSize: 16,
      color: colorPalette.primaryGreen,
    },
  });