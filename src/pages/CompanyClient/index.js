import React, { useState, useEffect } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements'
import CompanyListItem from '../../components/CompanyListItem'
import CompanyOverlay from '../../components/CompanyOverlay'

export default function CompanyClient() {
  const [isLoading, setIsLoading] = useState(true)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [clickedItem, setClickedItem] = useState(null)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/companies?_quantity=40&_locale=pt_BR&uuid=uuid&name=name&country=country&email=email&phone=phone&birthday=date&image=image&address=streetAddress')
    .then(response => response.json())
    .then(json => {
      setFilteredData(json.data)
      setData(json.data)
    })
    .finally(() => setIsLoading(false))
  }, [])

  const updateData = (text) => {
    setFilteredData(data.filter((item) => item.name.includes(text)))
    setSearch(text)
  }

  const handleClickItem = (item) => {
    setClickedItem(item)
    toggleOverlay()
  }

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible)
  }

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
            <CompanyListItem
              key={item.uuid}
              item={item}
              onPress={() => handleClickItem(item)}
            />
          ))
        }
      </ScrollView>
      <CompanyOverlay
        item={clickedItem}
        visible={overlayVisible}
        toggleOverlay={toggleOverlay}
      />
    </View>
  )
}
