import { getMainLocales } from '@/app/config/mainlangs';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: getMainLocales(),
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});