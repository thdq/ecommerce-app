import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

type SpaceProps = {
  height: number
}

const Spacer = ({ height }: SpaceProps) => <MotiView style={{ height }} />

export const SkeletonCard = () => {
  const colorMode = 'light'

  return (
    <Pressable style={styles.container}>
      <MotiView
        transition={{
          type: 'spring',
        }}
        style={styles.view}
        animate={{ backgroundColor: '#ffffff' }}
      >
        <View style={styles.skeletonGroup}>
          <Skeleton colorMode={colorMode} radius={16} height={100} width={100}></Skeleton>

          <Spacer height={16} />
          <Skeleton colorMode={colorMode} width={'100%'} />
          <Spacer height={16} />
          <Skeleton colorMode={colorMode} width={'75%'} />
          <Spacer height={24} />
          <Skeleton colorMode={colorMode} width={'50%'} />
        </View>
      </MotiView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    height: 'auto',
  },
  view: {
    padding: 16,
    borderRadius: 8,
  },
  skeletonGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
