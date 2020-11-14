import React, {
  useState,
  useEffect
} from 'react';
import { 
  View, 
  ScrollView, 
  ActivityIndicator 
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ContactListItem from '../../components/ContactListItem';
import ContactOverlay from '../../components/ContactOverlay';

export default function ContactProvider() {
  const [isLoading, setIsLoading] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/custom?_quantity=40&_locale=pt_BR&uuid=uuid&name=company_name&country=country&email=email&phone=phone&birthday=date&image=image&address=streetAddress')
    .then(response => response.json())
    .then(json => {
      setFilteredData(json.data);
      setData(json.data);
    })
    .finally(() => setIsLoading(false));
  }, []);

  const updateData = (text) => {
    setFilteredData(data.filter((item) => item.name.includes(text)));
    setSearch(text);
  };

  const handleClickItem = (item) => {
    setClickedItem(item);
    toggleOverlay();
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={updateData}
        value={search}
      />
      <ScrollView>
        {
          isLoading 
          ? <ActivityIndicator 
              size="large" 
              color="#1E9577"
              style={{
                marginVertical: 160,
              }}
            /> 
          : filteredData.map((item, index) => (
            <ContactListItem 
              key={item.uuid} 
              item={item}
              onPress={() => handleClickItem(item)}
            />
          ))
        }
      </ScrollView>
      <ContactOverlay
        item={clickedItem}
        visible={overlayVisible}
        toggleOverlay={toggleOverlay}
      />
    </View>
  );
};