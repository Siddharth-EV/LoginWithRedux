import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './button.styles';
const CustButton = (props) => {
  return (
    <View style={styles.buttonRow}>
      <View style={styles.buttonSize}>
        <TouchableOpacity onPress={props.onSave}>
          <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
CustButton.prototype = {
  name: PropTypes.string.isRequired,
  onSave: PropTypes.func,
};

export default CustButton;
