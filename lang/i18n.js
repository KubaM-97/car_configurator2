import * as Localization from 'expo-localization';
import I18n from 'react-native-i18n';

import pl from '~/lang/translations/pl.js';
import en from '~/lang/translations/en.js';
import jpn from '~/lang/translations/jpn.js';

I18n.fallbacks = true;
I18n.locale = Localization.locale;
I18n.defaultLocale = "en";
I18n.translations = {
  pl,
  en,
  jpn,
};

export default I18n;