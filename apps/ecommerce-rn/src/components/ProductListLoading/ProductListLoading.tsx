import { SkeletonCard } from 'ui-rn'
import { FlatList } from './ProductListLoading.styles'

const NUMBER_COLUMNS = 2
const SKELETON_FAKE_LIST = [...Array(6).keys()]

export const ProductListLoading = () => {
  const renderSkeleton = () => <SkeletonCard />

  return (
    <FlatList
      testID='skeleton-loading'
      data={SKELETON_FAKE_LIST}
      numColumns={NUMBER_COLUMNS}
      keyExtractor={(item: number) => item.toString()}
      renderItem={renderSkeleton}
    />
  )
}
