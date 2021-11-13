import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default ({
    navigation,
    refreshTableData,
    contactList,
    deleteContact,
}) => {
    function checkContactImage(user) {
        if (user.img == '') {
            return 'https://cdn.discordapp.com/attachments/632400348161769472/871118346425344061/5700c04197ee9a4372a35ef16eb78f4e.png';
        } else {
            return user.img;
        }
    }

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    deleteContact(user._id);
                    refreshTableData();
                },
            },
            {
                text: 'Não',
            },
        ]);
    }

    function getAction(user) {
        return (
            <>
                <Button
                    onPress={() => navigation.navigate('EditContact', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    }

    function getUserItem({ item: user }) {
        const image = checkContactImage(user);
        return (
            <ListItem
                key={user.id}
                bottomDivider
                //onPress={() => console.warn('AAAA')}
            >
                <Avatar source={{ uri: image }} rounded size={50} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
                </ListItem.Content>
                {getAction(user)}
            </ListItem>
        );
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <FlatList
                keyExtractor={(user) => user._id.toString()}
                data={contactList.contacts}
                renderItem={getUserItem}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 30,
        //flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        height: 120,
        marginVertical: 5,
        height: '100%',
        width: '90%',
    },
});
