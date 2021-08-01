import React from 'react';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/routes/Stack';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './src/middlewares/apiMiddleware';

const middlewareEnhancer = applyMiddleware(apiMiddleware, thunkMiddleware);
const store = createStore(rootReducer, undefined, compose(middlewareEnhancer));

export default function App() {
   
    const [loaded] = useFonts({
        Roboto: require('./src/fonts/Roboto-Regular.ttf'),
       });
       
       if (!loaded) {
       return null;
       }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </Provider>
    );
}

registerRootComponent(App);
