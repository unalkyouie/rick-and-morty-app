import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colorPalette } from '../../styles/colorPalette';
import { styles } from './Button.styled';

type Props = {
  variant: 'primary' | 'secondary';
  text: string;
  onPress: () => void;
  icon?: string;
  backgroundColor?: string;
};

const CustomButton: React.FC<Props> = ({
  text,
  onPress,
  icon,
  backgroundColor = 'transparent',
  variant,
}) => {
  const accentColor =
    variant === 'primary' ? colorPalette.white : colorPalette.darkGreen;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderColor: accentColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            style={[styles.icon, { color: accentColor }]}
          />
        )}
        <Text style={[styles.text, { color: accentColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
