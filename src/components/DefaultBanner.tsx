import {banner_test_id} from '../constants';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import React from 'react';

export const DefaultBanner = () => {
  return (
    <BannerAd
      unitId={banner_test_id}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      onAdFailedToLoad={error => console.error(error)}
    />
  );
};
