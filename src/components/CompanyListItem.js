import React from 'react'
import { ListItem, Divider, Avatar } from 'react-native-elements'

export default function ContactListItem({item, onPress}) {
  return (
    <>
      <ListItem onPress={onPress}>
        <Avatar
         rounded
         size="medium"
         source={{uri: item.image.replace('any', 'company')}} 
        />
      <ListItem.Content>
        <ListItem.Title style={{fontSize: 17}}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle style={{fontSize: 15}}>
          {item.country}
        </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>
      <Divider style={{ backgroundColor: '#1E9577' }} />
    </>
  )
}