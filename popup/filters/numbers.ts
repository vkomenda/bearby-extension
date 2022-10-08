import { get } from 'svelte/store';

import settingsStore from 'popup/store/settings';


export function formatNumber(balance: number | string, currency?: string) {
  const { format } = get(settingsStore);

  if (!format) {
    return `${currency || ''} ${balance}`;
  }

  const locale = 'en';// navigator.language;
  let opt: Intl.NumberFormatOptions = {
    style: undefined,
    currency: undefined,
    maximumSignificantDigits: 5,
    notation: "compact"
  };

  if (currency) {
    opt.style = 'currency';
    opt.currency = currency;
  }

  try {
    return new Intl
      .NumberFormat(locale, opt)
      .format(Number(balance));
  } catch {
    opt.style = undefined;
    opt.currency = undefined;

    const n = new Intl
      .NumberFormat(locale, opt)
      .format(Number(balance));
    return `${currency} ${n}`;
  }
}
