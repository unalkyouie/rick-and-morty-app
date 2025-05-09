import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorPalette } from '../../styles/colorPalette';
import { styles } from './Checkbox.styled';

interface Props  {
  label: string;
  checked: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const Checkbox: React.FC<Props> = ({
  label,
  checked,
  onPress,
  style,
  labelStyle,
}) => {
  const iconName = checked ? 'checkbox' : 'checkbox-outline';
  const iconColor = checked ? colorPalette.darkGreen : colorPalette.mediumGreen;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
      <Text
        style={[
          styles.label,
          { color: iconColor },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
