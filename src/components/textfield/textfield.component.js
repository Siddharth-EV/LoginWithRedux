import React from 'react';
import {styles} from './textfield.styles';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustTextField = (props) => {
  return (
    <View>
      <TextInput
        style={styles.InputNoIcon}
        ref={props.inputRef}
        onSubmitEditing={props.onSubmitEditing}
        keyboardType={props.keyboardType}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={(temp) => props.onChange(temp)}
        onFocus={props.onFocus}
        numberOfLines={props.numberOfLines}
        placeholderTextColor="#9F9FA2"
        secureTextEntry={props.secureTextEntry}
      />
      {props.error ? (
        <View style={styles.ErrorSection}>
          <Text style={styles.ErrorText}>{props.error}</Text>
        </View>
      ) : null}
    </View>
  );
};
CustTextField.propTypes = {
  keyboardType: PropTypes.string,
  inputRef: PropTypes.any,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secureTextEntry:PropTypes.bool
};
export default CustTextField;
