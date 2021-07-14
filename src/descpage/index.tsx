import React from 'react'
import { Image, Text, StyleSheet, View, ScrollView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { PRICE } from '../stringliterals'
import { RootStackParamList } from '../types'

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    productImage: {
        aspectRatio: 0.75,
        width: '100%',
    },
    detailsContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    title: {
        fontSize: 16,
        paddingVertical: 8,
    },
    brand: {
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
    },
})

interface DescriptionProps {
    navigation: StackNavigationProp<RootStackParamList, 'description'>
    route: RouteProp<RootStackParamList, 'description'>
}

const ProductDescription = (props: DescriptionProps) => {
    const {
        route: {
            params: { itemDetails },
        },
    } = props

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Image style={styles.productImage} source={{ uri: itemDetails.image }} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>
                    <Text style={styles.brand}>{`${itemDetails.brand} `}</Text>
                    <Text>{itemDetails.productName}</Text>
                </Text>
                <Text style={styles.price}>{PRICE(itemDetails.price)}</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDescription
