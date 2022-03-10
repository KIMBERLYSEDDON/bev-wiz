import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Register = () => {
    return (
        <View>
            {/* TODO: Add BevWiz logo component */}
            <Text>Register</Text>

            <Form>
                <TextInput 
                    name="name"
                    value={String}
                    placeholder="name"
                />
                <TextInput
                    name="email" 
                    placeholder="email"
                />
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

export default Register;