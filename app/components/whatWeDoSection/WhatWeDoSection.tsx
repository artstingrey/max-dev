import WhatWeDoTitleSection from './WhatWeDoTitleSection';
import { useTranslations, useLocale } from 'next-intl';
import clsx from 'clsx';
import styles from './whatWeDoSection.module.scss';

type WhatWeDoItem = {
  title: string;
  lineText: string[];
};

export default function WhatWeDoSection () {
    const locale = useLocale();
    const addClass = locale == "ru" ? styles.whatWeDoSectionRu : "";

    const t = useTranslations('whatWeDo');
    const items = t.raw('items') as WhatWeDoItem[];

    const titleSectionProps = items;

    return (
        <section id="services" className={clsx(styles.whatWeDoSection, addClass)}>
            <h2 className="flex--center"><span className="subtitle pusle-dot--shadow pusle-dot pusle-dot--inner-pulse-colored">{t('subTitle')}</span></h2>
            {titleSectionProps.map((item) => {
                return <WhatWeDoTitleSection key={crypto.randomUUID()} title={item.title} lineText={item.lineText}/>
            })}  
        </section>
    );
}