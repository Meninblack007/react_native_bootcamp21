import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../types'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

interface DescriptionProps {
    navigation: StackNavigationProp<RootStackParamList, 'description'>
    route: RouteProp<RootStackParamList, 'description'>
}

const ProductDescription = (props: DescriptionProps) => {
    return (
        <View style={styles.container}>
            <Text>This is product description page</Text>
        </View>
    )
}

export default ProductDescription
