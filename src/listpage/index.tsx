import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { ItemDetails, ListDetails, RootStackParamList, UIState } from '../global'
import ProductItem from './item'
import { RootState } from '../store'
import { fetchListDetails } from './actions'
import { LIST } from '../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
interface ListProps {
    navigation: StackNavigationProp<RootStackParamList, 'list'>
    fetchListDetails: () => void
    listDetails: ListDetails
}

const ProductList = (props: ListProps) => {
    const { navigation, fetchListDetails, listDetails } = props

    useEffect(() => {
        fetchListDetails()
    }, [])

    const onItemPress = (itemDetails: ItemDetails) => {
        navigation.navigate('description', { itemDetails })
    }

    const renderItem = ({ item }: { item: ItemDetails }) => <ProductItem itemDetails={item} onItemPress={onItemPress} />

    const renderList = (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => `${item.productName}`}
                data={listDetails.data}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )

    const renderLoading = (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'#FF3F6C'} />
        </View>
    )

    switch (listDetails.uiState) {
        case UIState.LOADING:
            return renderLoading
        case UIState.FINISHED:
            return renderList
        default:
            break
    }
}

const mapStateToProps = (state: RootState) => ({
    listDetails: state.list[LIST],
})

const mapDispatchToProps = {
    fetchListDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
