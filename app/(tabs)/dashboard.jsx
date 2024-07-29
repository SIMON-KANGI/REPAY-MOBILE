import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { Link } from 'expo-router';
import images from '../../constants/images';
import TransactionsCard from '../../components/TransactionsCard';
import { selectCurrentUser } from '../../features/auth/authSlice';
import CalculateBalance from '../../components/CalculateBalance';

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor='#f2e9e4' />
      <View style={styles.header}>
        <Text style={styles.headerText}>My Dashboard</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: user?.profile }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.walletSection}>
          <View style={styles.walletCard}>
            <Text style={styles.walletTitle}>My Wallet:</Text>
            <Text style={styles.walletAmount}><CalculateBalance/> KES</Text>
          </View>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionButtonContent}>
                <View style={styles.payButton}>
                  <Image source={images.pay} style={styles.actionIcon} />
                </View>
                <Text style={styles.actionLabel}>Pay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionButtonContent}>
                <View style={styles.sendButton}>
                  <MaterialIcons name="arrow-outward" size={32} color="white" />
                </View>
                <Text style={styles.actionLabel}>Send</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionButtonContent}>
                <View style={styles.withdrawButton}>
                  <Image source={images.withdraw} style={styles.actionIcon} />
                </View>
                <Text style={styles.actionLabel}>Withdraw</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionButtonContent}>
                <View style={styles.invoiceButton}>
                  <FontAwesome5 name="file-invoice-dollar" size={24} color="white" />
                </View>
                <Text style={styles.actionLabel}>Invoice</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.quickLinksContainer}>
            <TouchableOpacity style={styles.quickLinkButton}>
              <View style={styles.quickLinkContent}>
                <MaterialIcons name="account-balance" size={32} color="#70e000" />
                <Text style={styles.quickLinkLabel}>Accounts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickLinkButton}>
              <View style={styles.quickLinkContent}>
                <FontAwesome6 name="money-bill-transfer" size={32} color="#70e000" />
                <Text style={styles.quickLinkLabel}>Transactions</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickLinkButton}>
              <View style={styles.quickLinkContent}>
                <FontAwesome5 name="file-invoice-dollar" size={32} color="#70e000" />
                <Text style={styles.quickLinkLabel}>Invoices</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickLinkButton}>
              <View style={styles.quickLinkContent}>
                <MaterialIcons name="production-quantity-limits" size={32} color="#70e000" />
                <Text style={styles.quickLinkLabel}>Products</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.transactionsSection}>
            <Text style={styles.transactionsTitle}>Recent Transactions</Text>
            <TransactionsCard
              title="Transaction 1"
              amount="KES 5000"
              receiver="Simon Mwangi"
              date="12-01-2022"
              status="Success"
            />
            <TransactionsCard
              title="Transaction 2"
              amount="KES 5000"
              receiver="Simon Mwangi"
              date="12-01-2022"
              status="Success"
            />
            <TransactionsCard
              title="Transaction 3"
              amount="KES 5000"
              receiver="Simon Mwangi"
              date="12-01-2022"
              status="Success"
            />
            <Link href="/home" style={styles.viewMoreLink}>View More</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#0d1b2a",
  },
  header: {
    padding: 12,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#f53b57',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: '#0d1b2a',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  notificationButton: {
    marginLeft: 'auto',
  },
  walletSection: {
    flex: 1,
    backgroundColor: "#f2e9e4",
    padding: 16,
  },
  walletCard: {
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 16,
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  walletTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  walletAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonContent: {
    alignItems: 'center',
  },
  payButton: {
    backgroundColor: '#f53b57',
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#00aaff',
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withdrawButton: {
    backgroundColor: '#34d399',
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invoiceButton: {
    backgroundColor: '#540d6e',
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
  },
  actionLabel: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  quickLinkButton: {
    backgroundColor: '#1b4332',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 8,
    padding: 16,
    width: '45%',
  },
  quickLinkContent: {
    alignItems: 'center',
  },
  quickLinkLabel: {
    fontSize: 18,
    color: '#e2e8f0',
    fontWeight: 'bold',
    marginTop: 8,
  },
  transactionsSection: {
    padding: 16,
  },
  transactionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  viewMoreLink: {
    color: '#f53b57',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default Dashboard;
