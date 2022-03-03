import React from 'react';
import { View, Text, Form, TextInput } from 'react-native';

const Login = () => {
    // TODO: add state changes for form inputs

    return (
        <View>
            {/* TODO: Add BevWiz logo component */}
            <Text>Login</Text>

            <Form>
                <TextInput 
                    name="username"
                    placeholder="username"
                />
                <TextInput 
                    name="password"
                    placeholder="password"
                    secureTextEntry={true}
                />
            </Form>
        </View>
    );
}

// TODO: Add style sheet

export default Login;