import React from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';

const Input = ({
  viewStyle,
  style,
  placeholder,
  children,
  onFocus,
  onBlur,
  onSubmitEditing,
  value,
  onChangeText,
  ref,
  focusedInput,
  keyboardType,
  placeholderTextColor,
  defaultValue,
  secureTextEntry,
  maxLength,
  numberOfLines,
  type,
  name,
}) => {

  const { containerStyle, inputStyle, iconStyle } = styles;

  return (
    <View style={[containerStyle, viewStyle]}>
      <Icon
        type={type}
        name={name}
        style={[iconStyle]}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={onFocus}
        style={[inputStyle, style]}
        onBlur={onBlur}
        defaultValue={defaultValue}
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
        ref={ref}
        focusedInput={focusedInput}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    height: 55,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#CCD0EA',
    marginBottom: 30,
    alignItems: 'center',
    // alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  inputStyle: {
    letterSpacing: RFPercentage(0.1),
    width: '90%',
    color: '#2033A0',
    paddingLeft: 5,
  },
  iconStyle: {
    color: 'rgba(119,39,255,0.5)',
    fontSize: 18,
    marginRight: 10,
  },
});

export { Input };
