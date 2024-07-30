import React,{useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import images from '../../constants/images';
import Card from '../../components/Cards'
import CalculateBalance from '../../components/CalculateBalance';
import { selectCurrentUser } from '../../features/auth/authSlice';
import ModalView from '../../components/modal';

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const [modalVisible, setModalVisible] = useState(false);
const icons=[
  { icon: images.pay, color: '#f43f5e', text: 'Pay' },
  { icon: <MaterialIcons name="arrow-outward" size={32} color="white" />, color: '#0ea5e9', text: 'Send' },
  { icon: images.withdraw, color: '#10b981', text: 'Withdraw' },
  { icon: <FontAwesome5 name="file-invoice-dollar" size={24} color="white" />, color: '#540d6e', text: 'Invoice' },
]
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <ModalView
      visible={modalVisible}
      onDismiss={()=>setModalVisible(false)}
    />
      <StatusBar backgroundColor='#f2e9e4' />
      <View>
        <Text style={styles.welcomeText}>Welcome <Text>{user?.username}</Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user?.profile }}
            style={styles.profileImage}
          />
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.walletContainer}>
            <Text style={styles.walletTitle}>My Wallet:</Text>
            {/* Ensure that CalculateBalance is properly rendering text */}
            <View
              style={{display:"flex-row"}}>
               <CalculateBalance />
               <Text style={styles.walletAmount}> KES</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            {/* {icons.map((action, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.actionItem}>
                  <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                    {typeof action.icon === 'string' ? <Image source={action.icon} style={styles.actionImage} /> : action.icon}
                  </View>
                  <Text style={styles.actionText}>{action.text}</Text>
                </View>
              </TouchableOpacity>
            ))} */}
            <TouchableOpacity style={styles.actionItem}
            onPress={()=>setModalVisible(true)} >
            <View style={[styles.actionIcon, {backgroundColor:"green"}]}>
            <Image source={images.pay}
              style={styles.actionImage}
  
            />
            </View>
            
              <Text style={styles.actionText}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} 
              onPress={()=>setModalVisible(true)}>
            <View style={[styles.actionIcon, {backgroundColor:"blue"}]}><MaterialIcons name="arrow-outward" size={32} color="white" /></View>
            
              <Text style={styles.actionText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} 
              onPress={()=>setModalVisible(true)}>
            <View style={[styles.actionIcon, {backgroundColor:"green"}]}>
            <Image source={images.withdraw}
              style={styles.actionImage}
  
            />
            </View>
            
              <Text style={styles.actionText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} 
              onPress={()=>setModalVisible(true)}>
            <View style={[styles.actionIcon, {backgroundColor:"purple"}]}>
            <FontAwesome5 name="file-invoice-dollar" size={24} color="white" />
            </View>
            
              <Text style={styles.actionText}>Send</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled style={styles.horizontalScrollView}>
            {[
              { image: images.card, title: "Without Repay" },
              { image: images.online, title: "With Repay" },
              { image: images.free, title: "Repay is Free to use" },
              { image: images.bank, title: "Bank to Bank transfer" },
            ].map((card, index) => (
              <Card key={index} image={card.image} title={card.title} />
            ))}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled style={styles.horizontalScrollView}>
            {[
              { image: images.manage, title: "Manage Expenses" },
              { image: images.invoice, title: "Send Invoices" },
              { image: images.shop, title: "Manage your Shop" },
              { image: images.repay_card, title: "Get Repay Card" },
            ].map((card, index) => (
              <Card key={index} image={card.image} title={card.title} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#0d1b2a',
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#f43f5e',
    marginVertical: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  mainContent: {
    backgroundColor: '#f2e9e4',
    paddingVertical: 16,
    flex: 1,
  },
  walletContainer: {
    borderWidth: 1,
    borderColor: '#a8a8a8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  walletTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  walletAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionImage: {
    width: 48,
    height: 48,
  },
  actionText: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  horizontalScrollView: {
    paddingVertical: 10,
  },
});

export default Home;
