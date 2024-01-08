import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useIPOsData from '../hooks/useIPOsData';

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
    padding: 10,
    borderRadius: 50,
  },
  ipoCard: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingTop: 40,
    marginBottom: 16,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: 16,
    color: '#555',
  },
  offeringDate: {
    fontSize: 16,
    color: '#555',
  },
  volume: {
    fontSize: 16,
    color: '#555',
  },
});

const UpcomingIPOs = () => {
  const [refresh, setRefresh] = useState(false);
  const upcomingIPOs = useIPOsData(refresh);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Upcoming IPOs</Text>
        <TouchableOpacity onPress={handleRefresh} activeOpacity={0.7} style={styles.refreshButton}>
          <Icon name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        {upcomingIPOs.map((ipo, index) => (
          <View key={index} style={styles.ipoCard}>
            <Text style={styles.companyName}>{ipo.companyName}</Text>
            <Text style={styles.symbol}>Symbol: {ipo.symbol}</Text>
            <Text style={styles.offeringDate}>Offering Date: {ipo.offeringDate}</Text>
            <Text style={styles.volume}>Volume: {ipo.volume}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default UpcomingIPOs;
