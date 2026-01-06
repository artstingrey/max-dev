import { MenuItem } from "../config/menuTypes";

export const getHref = (item:MenuItem, pathname:string) => {
    if (item.labelKey === 'faq') {
      if (pathname === '/referal') {
        return { pathname: '/referal', hash: 'faq' };
      }
      return { pathname: '/', hash: 'faq' };
    }

    return item.href;
  };