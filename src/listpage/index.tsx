import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { RootStackParamList } from '../types'
import { RootState } from '../store'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

interface ProductListProps {
    navigation: StackNavigationProp<RootStackParamList, 'list'>
}

const ProductList = (props: ProductListProps) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>This is product list page</Text>
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
