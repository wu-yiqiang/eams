import { View, Text, StyleSheet, ScrollView, Button, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native'
import Empty from '@/components/Empty'
import { Link, Stack, router, Tabs } from "expo-router";
import Items from '@/app/assets/items'
import { GetAssetsPage } from '@/api/public'
import { useEffect, useState } from 'react'

export default function Assets(props: any) {
  const [items, setItems] = useState<any>([])
  const [params, setParams] = useState({ pageSize: 30, pageNo: 1 })
  let [loading, setLoading] = useState(false)
  const handleDetails = (event: Event) => {
    router.navigate({ pathname: '/assets/details' })
  }
  const loadMore = async () => {
    setParams({ pageSize: params.pageSize, pageNo: params.pageNo + 1 })
    const data = await getAssetsPage()
    setItems([...items, ...data])
  }
  const loadRefresh = async () => {
    setParams({ pageSize: params.pageSize, pageNo: 1 })
    const data = await getAssetsPage()
    setItems(data)
    console.log('滚动顶部了')
  }

  const getAssetsPage = async () => {
     if (loading) return
    setLoading(true)
    const { data } = await GetAssetsPage(params).finally(() => {
      setLoading(false)
    })
    console.log("sds", data)
    return JSON.parse(data ?? [])
  }
  return (
    <View style={styles.Assets}>
      <FlatList
        ListEmptyComponent={() => <Empty description="暂无数据" />}
        onRefresh={loadRefresh}
        onEndReached={loadMore}
        refreshing={loading}
        onEndReachedThreshold={0.4}
        data={items}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Text}
        renderItem={({ item, index, separators }) => (
          <Pressable onPress={handleDetails}>
            <Items key={item.id} target={item} />
          </Pressable>
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  Assets: {
    flex: 1,
    padding: 10,
  },
});
