import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './src/routes/Stack';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './src/middlewares/apiMiddleware';

const middlewareEnhancer = applyMiddleware(apiMiddleware, thunkMiddleware);
const store = createStore(rootReducer, undefined, compose(middlewareEnhancer));

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </Provider>
    );
}

registerRootComponent(App);
