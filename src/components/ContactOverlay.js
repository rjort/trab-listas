import React from 'react';
import { ScrollView } from 'react-native';
import {
    Input,
    Button,
    Overlay,
    ListItem,
    Avatar,
    Icon
} from 'react-native-elements';

export default function ContactOverlay({item, visible, toggleOverlay}) {
    const isValidItem = item !== null && item !== undefined;

    return (
        <>
            {
                isValidItem && 
                <Overlay 
                    isVisible={visible} 
                    fullScreen={true}
                    onBackdropPress={toggleOverlay}
                >
                    <>
                        <Icon
                            raised
                            name='chevron-left'
                            type='font-awesome-5'
                            color='#1E9577'
                            onPress={toggleOverlay}
                        />
                        <ScrollView>
                            <ListItem>
                                <Avatar 
                                    rounded
                                    size="large"
                                    source={{uri: item.image.replace('any', 'people')}} 
                                />
                                <ListItem.Content>
                                    <ListItem.Title style={{fontSize: 25}}>
                                    {item.name}
                                    </ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            <Input
                                disabled
                                label="Country"
                                value={item.country}
                            />
                            <Input
                                disabled
                                label="Address"
                                value={item.address}
                            />
                            <Input
                                disabled
                                label="Email"
                                value={item.email}
                            />
                            <Input
                                disabled
                                label="Phone"
                                value={item.phone}
                            />
                            <Input
                                disabled
                                label="Birthday"
                                value={item.birthday}
                            />
                            <Button
                                title='Back' 
                                onPress={toggleOverlay}
                            />
                        </ScrollView>
                    </>
                </Overlay>
            }
        </>
    );
};