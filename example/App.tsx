import React from 'react'
import { View, StatusBar, Text, StyleSheet } from 'react-native'
import {
  Plane,
  Chase,
  Bounce,
  Wave,
  Wander,
  Pulse,
  Flow,
  Circle,
  Grid,
  CircleFade,
  Fold,
  Swing,
} from 'react-native-animated-spinkit'

const spinners = [
  { component: Plane, backgroundColor: '#d35400' },
  { component: Chase, backgroundColor: '#2c3e50' },
  { component: Bounce, backgroundColor: '#1abc9c' },
  { component: Wave, backgroundColor: '#2980b9' },
  { component: Wander, backgroundColor: '#7f8c8d' },
  { component: Pulse, backgroundColor: '#ffcb65' },
  { component: Swing, backgroundColor: '#d35400' },
  { component: Flow, backgroundColor: '#27ae60' },
  { component: Circle, backgroundColor: '#d35400' },
  { component: Grid, backgroundColor: '#2c3e50' },
  { component: CircleFade, backgroundColor: '#1abc9c' },
  { component: Fold, backgroundColor: '#2980b9' },
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {Array(Math.round(spinners.length / 3))
        .fill(null)
        .map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {spinners
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((spinner, index) => {
                const Spinner = spinner.component
                return (
                  <View
                    style={[
                      styles.cell,
                      {
                        backgroundColor: spinner.backgroundColor,
                      },
                    ]}
                    key={index}
                  >
                    <Spinner color="#FFF" />
                    <Text style={styles.componentLabel}>
                      {`<${spinner.component.name} \/>`}
                    </Text>
                  </View>
                )
              })}
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  componentLabel: {
    position: 'absolute',
    bottom: 14,
    color: '#FFF',
    fontWeight: 'bold',
    opacity: 0.7,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
