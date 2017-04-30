### Copmonents Folder
All components are stored and organized here.

Add an example to the top of the component to show it on the examples screen:
``
// Example
ExamplesRegistry.add('Alert Message', () =>
  <View>
    <AlertMessage
      title='Alert Message with animation'
    />
    <AlertMessage
      title='Never see me'
      show={false}
    />
  </View>
)
``
