import {FlatList, Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useCallback} from 'react';
import {Host_Ubuntu} from '../../../env';
type ImageCarouaselProps = {
  images: string[];
};

const ImageCarouasel = (props: ImageCarouaselProps) => {
  const width = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onViewChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  const imageUrl = `${Host_Ubuntu}/uploads/${props.images}`;

  return (
    <View style={styles.root}>
      <FlatList
        data={props.images}
        horizontal
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Image style={[styles.image, {width: width - 25, height: (width - 20) * 0.8}]} source={{uri: imageUrl}} />}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onViewChanged}
      />
      <View style={styles.dots}>
        {props.images.map((image, index) => (
          <View key={index} style={[styles.dot, {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]} />
        ))}
      </View>
    </View>
  );
};

export default ImageCarouasel;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#c9c9c9',
    borderRadius: 25,
    margin: 5,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
