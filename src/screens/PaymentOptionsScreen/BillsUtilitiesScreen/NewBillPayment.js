import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import HeaderComponent from '../../../component/HeaderComponent';
import BackIcon from '../../../../Assets/Icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import SearchIcon from '../../../../Assets/Icons/SearchIcon';

const NewBillPayment = () => {
  const navigation = useNavigation();
  const [serachData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const textInputRef = useRef(null);

  const chooseBillerData = async () => {
    try {
      const url = 'http://192.168.10.5:3000/billUtilities';
      let result = await fetch(url);
      result = await result.json();
      setSearchData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    chooseBillerData();
    textInputRef.current.focus();
  }, []);

  const filteredData = serachData.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.img.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
        handleBack={() => navigation.navigate('BillUtilities')}
      />
      <View style={styles.chooseBillerWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.headerText}>Choose biller</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.searchIcon}>
            <SearchIcon height={25} width={25} fill={'white'} />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              ref={textInputRef}
              autoFocus={true}
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
              placeholder="Search..."
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.dropDownContainer}>
        {filteredData.map((item, index) => (
          <View key={index} style={styles.dataWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                source={{uri: item.img}}
                style={styles.image}
                onError={() => console.log('Image failed to load')}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ConsumerNumber')}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  chooseBillerWrapper: {
    justifyContent: 'space-around',
    marginTop: '3%',
    marginLeft: '2%',
  },
  headingWrapper: {
    marginLeft: '3%',
  },

  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    margin: '3%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  searchIcon: {
    marginTop: '3%',
    marginLeft: '3%',
  },
  textInputWrapper: {
    marginLeft: '3%',
    width: '87%',
  },
  textInput: {
    fontSize: 20,
  },
  dropDownContainer: {
    flex: 1,
  },
  dataWrapper: {flexDirection: 'row', margin: '3%'},
  imageWrapper: {
    marginLeft: '10%',
    backgroundColor: 'white',
  },
  image: {
    backgroundColor: 'white',
  },
});

export default NewBillPayment;
