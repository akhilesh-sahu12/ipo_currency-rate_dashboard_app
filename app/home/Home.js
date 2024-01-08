import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
  // Placeholder data for demonstration purposes
  const IPOsCount = 100;
  const currencyRatesCount = 10;
  const chartsCount = 5;
  const settingsCount = 2;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>Financial Tracker</Text>
        <Text>Welcome to the Financial Tracker app!</Text>
      </View>

      <View style={styles.mainCards}>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Upcoming IPOs</Text>
            <Icon name="chart-bar" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>{IPOsCount}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Currency Rates</Text>
            <Icon name="currency-usd" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>{currencyRatesCount}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Charts</Text>
            <Icon name="chart-line" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>{chartsCount}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Settings</Text>
            <Icon name="cog" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>{settingsCount}</Text>
        </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginLeft: '50%', // Render content after 40% width
    marginTop: 40,
  },
  mainTitle: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainCards: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1, // Make sure the mainCards container takes up the available space
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    alignItems: "center",
  },
  cardInner: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  refreshButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 50,
    alignSelf: "flex-end",
    // position: "absolute",
    top: 20,
    right: 20,
  },
});


export default Home;
