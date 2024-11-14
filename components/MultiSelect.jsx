import SelectDropdown from 'react-native-select-dropdown'
import {TextInput, Button, View, StyleSheet, Text} from 'react-native';

export default function MultiSelect() {
  const runningType = [
    {title: 'Basic Running', name: 'bRun'},
    {title: 'Orienteering Training Forest', name: 'OTF'},
    {title: 'Orienteering Training City', name: 'OTC'},
    {title: 'Orienteering Race Forest', name: 'ORF'},
    {title: 'Orienteering Race City', name: 'ORC'},
    {title: 'Orienteering Intervals', name: 'OI'},
    {title: 'Basic Intervals', name: 'BI'},
    {title: 'Grass Intervals', name: 'GI'},
    {title: 'Hill Intervals', name: 'HI'},
    {title: 'Trail Running', name: 'TR'},
  ];

  return (
    <SelectDropdown
      data={runningType}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || 'Type of Run'}
            </Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}
  const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 200,
      height: 50,
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });