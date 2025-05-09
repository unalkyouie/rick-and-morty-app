import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colorPalette } from '../../styles/colorPalette';
import { styles } from './Button.styled';

type Props = {
  variant: 'primary' | 'secondary';
  label: string;
  onPress: () => void;
  icon?: { name: string; color?: string };
  style: StyleProp<ViewStyle>;
};

const Button: React.FC<Props> = ({ label, onPress, icon, variant, style }) => {
  const accentColor =
    variant === 'primary' ? colorPalette.white : colorPalette.darkGreen;
  const userStyle = StyleSheet.flatten(style);
  const buttonStyle: ViewStyle = {
    ...styles.button,
    ...userStyle,
    borderColor: accentColor,
  };
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        {icon && (
          <Ionicons
            key={icon.name}
            name={icon.name}
            size={12}
            style={[styles.icon, { color: icon.color ?? accentColor }]}
          />
        )}
        <Text key={label} style={[styles.text, { color: accentColor }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
