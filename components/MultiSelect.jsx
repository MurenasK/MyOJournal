import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View, StyleSheet } from 'react-native';

const MultiSelect = ({ value, onChange, setValue }) => {
  const runningType = [
    { label: 'Basic Running', value: 'BR' },
    { label: 'Orienteering Training Forest', value: 'OTF' },
    { label: 'Orienteering Training City', value: 'OTC' },
    { label: 'Orienteering Race Forest', value: 'ORF' },
    { label: 'Orienteering Race City', value: 'ORC' },
    { label: 'Orienteering Intervals', value: 'OI' },
    { label: 'Basic Intervals', value: 'BI' },
    { label: 'Grass Intervals', value: 'GI' },
    { label: 'Hill Intervals', value: 'HI' },
    { label: 'Trail Running', value: 'TR' },
  ];

  // Local state to hold selected values
  const [selectedValues, setSelectedValues] = useState(value || []);

  const handleSelect = (selectedItem, index) => {
    const newSelectedValues = selectedItem
      ? [...selectedValues, selectedItem.value]
      : selectedValues;
    setSelectedValues(newSelectedValues);
    setValue('runningType', newSelectedValues); // Update the form state with the selected values
  };

  return (
    <SelectDropdown
      data={runningType}
      onSelect={handleSelect}
      defaultValue={selectedValues}
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem ? selectedItem.label : 'Select Running Type'}
          </Text>
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && { backgroundColor: '#D2D9DF' }),
          }}
        >
          <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

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
  dropdownItemStyle: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
});

export default MultiSelect;
