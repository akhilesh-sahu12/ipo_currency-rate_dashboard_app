import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCurrencyRatesData from '../hooks/useCurrencyRatesData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  refreshButton: {
    backgroundColor: "#3498db",
    padding: 5,
    borderRadius: 50,
  },
  currencyRateCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
    color: '#555',
  },
});

const CurrencyRates = () => {
  const [refresh, setRefresh] = useState(false);
  const currencyRates = useCurrencyRatesData(refresh);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Latest Currency Rates</Text>
        <TouchableOpacity onPress={handleRefresh} activeOpacity={0.7} style={styles.refreshButton}>
          <Icon name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        {currencyRates.map((currencyRate) => (
          <View key={currencyRate.symbol} style={styles.currencyRateCard}>
            <Text style={styles.date}>Date: {new Date(currencyRate.timestamp).toLocaleString()}</Text>
            <Text style={styles.symbol}>{currencyRate.symbol}: {currencyRate.rate}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CurrencyRates;
