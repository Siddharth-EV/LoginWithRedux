import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    InputNoIcon: {
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#F2F2F3',
        borderWidth: 2,
        borderColor: '#EDEDF3',
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 30,
        color: '#000',
      },
      ErrorSection: {
        position: 'absolute',
        right: 15,
        top: 12,
        flexDirection: 'row',
      },
      ErrorText: {
        color: '#f66',
        top: -2,
        position: 'relative',
        fontSize: 13,
        right: 5,
      },
})