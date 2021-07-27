import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  View,
  Image,
  SafeAreaView,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';

import { IListItemExpanded } from '../../modules/list/interface';
import { getList } from '../../modules/list/actions';
import {
  listErrorSelector,
  listLoaderSelector,
  listSelector,
} from '../../modules/list/selectors';

import { expandListData } from '../../utils';

import styles from './styles';

const feedHeight = Dimensions.get('window').height * 2;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const loading = useSelector(listLoaderSelector);
  const error = useSelector(listErrorSelector);

  const [articleLoaded, setArticleLoaded] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    dispatch(getList.started());
  }, []);

  const renderHeader = () => <Text style={styles.header}>ARTICLES:</Text>;

  const renderItem = ({ item }: { item: IListItemExpanded }) => {
    if (item.isArticle) {
      return (
        <RNTaboolaView
          mode="alternating-widget-without-video"
          publisher="sdk-tester"
          pageType="article"
          pageUrl="https://blog.taboola.com"
          placement="Below Article"
          targetType="mix"
          style={{ height, width: '100%' }}
          viewID="12345"
          darkMode={false}
          onDidLoad={event => {
            console.log('Article loaded ' + event.nativeEvent.placementName);
            setHeight(parseInt(event.nativeEvent.height, 10));
            setArticleLoaded(true);
          }}
          onDidFailToLoad={event => {
            console.warn(
              'onRenderFail placementName: ' + event.nativeEvent.placementName,
            );
            console.warn('onRenderFail error: ' + event.nativeEvent.error);
          }}
        />
      );
    }

    if (item.isFeed) {
      return articleLoaded ? (
        <RNTaboolaView
          mode="thumbs-feed-01"
          publisher="sdk-tester"
          pageType="article"
          pageUrl="https://blog.taboola.com"
          placement="Feed without video"
          targetType="mix"
          interceptScroll={true}
          style={{ height: feedHeight, width: '100%' }}
          viewID="12345"
          darkmode={false}
          onDidLoad={event => {
            console.log('Feed loaded ' + event.nativeEvent.placementName);
          }}
          onDidFailToLoad={event => {
            console.warn(
              'onRenderFail placementName: ' + event.nativeEvent.placementName,
            );
            console.warn('onRenderFail error: ' + event.nativeEvent.error);
          }}
        />
      ) : (
        <ActivityIndicator size="large" />
      );
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <Text style={styles.descriptionText}>
          Description: {item.description}
        </Text>
      </View>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      {loading ? <ActivityIndicator size="large" /> : <Text>No data</Text>}
    </View>
  );

  if (error) {
    Alert.alert('Error while request: ', error);
  }

  return (
    <SafeAreaView style={styles.flexContainer}>
      <FlatList<IListItemExpanded>
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyComponent()}
        data={expandListData(list)}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        removeClippedSubviews={false}
        contentContainerStyle={styles.container}
        style={styles.flexContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
