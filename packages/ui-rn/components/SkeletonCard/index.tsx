import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

type SpaceProps = {
  height: number
}

const Spacer = ({ height }: SpaceProps) => <MotiView style={{ height }} />

type SkeletonCardProps = ViewProps

export const SkeletonCard = ({ ...props }: SkeletonCardProps) => {
  const colorMode = 'light'

  return (
    <View {...props} style={styles.container}>
      <MotiView
        transition={{
          type: 'spring',
        }}
        style={styles.view}
        animate={{ backgroundColor: '#ffffff' }}
      >
        <View style={styles.skeletonGroup}>
          <Skeleton colorMode={colorMode} radius={8} height={150} width={'100%'}></Skeleton>
          <View style={styles.contentGroup}>
            <Spacer height={16} />
            <Skeleton colorMode={colorMode} height={24} width={'100%'} />
            <Spacer height={12} />
            <Skeleton colorMode={colorMode} height={16} width={'75%'} />
            <Spacer height={24} />
            <View style={styles.footerGroup}>
              <Skeleton colorMode={colorMode} width={'70%'} />
              <Skeleton colorMode={colorMode} width={'50%'} />
            </View>
          </View>
        </View>
      </MotiView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
    height: 'auto',
  },
  view: {
    borderRadius: 8,
  },
  skeletonGroup: {
    justifyContent: 'center',
  },
  contentGroup: {
    padding: 8,
  },
  footerGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
