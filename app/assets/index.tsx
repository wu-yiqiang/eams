import { View, Text, StyleSheet, ScrollView, Button, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native'
import Empty from '@/components/Empty'
import { Link, Stack, router, Tabs } from "expo-router";
import Items from '@/app/assets/items'
import { GetAssetsPage } from '@/api/public'
import { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Assets(props: any) {
    const { bottom } = useSafeAreaInsets()
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
    const {data} = await GetAssetsPage(params).finally(() => {
      setLoading(false)
    })
    console.log('获取列表', data)
    return JSON.stringify(data ? data : [])
  }
  const handleAdd = () => {
    router.navigate({ pathname: '/assets/add' })
  }
  return (
    <View style={styles.Assets}>
      <Appbar.Header
        mode="small"
        elevated
        style={[
          {
            height: 40,
          }
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Content title="资产" />
        <Appbar.Action icon="image-filter-center-focus" onPress={() => {}} />
        <Appbar.Action icon="plus-circle-outline" onPress={handleAdd} />
      </Appbar.Header>
      <View style={styles.AssetsContents}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  Assets: {
    flex: 1,
  },
  AssetsContents: {
    flex: 1,
    padding: 10,
  },
});
