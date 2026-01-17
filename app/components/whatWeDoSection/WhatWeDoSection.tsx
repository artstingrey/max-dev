import WhatWeDoTitleSection from './WhatWeDoTitleSection';
import { useTranslations } from 'next-intl';
import styles from './whatWeDoSection.module.scss';

type WhatWeDoItem = {
  title: string;
  lineText: string[];
};

export default function WhatWeDoSection () {
    const t = useTranslations('whatWeDo');
    const items = t.raw('items') as WhatWeDoItem[];

    const titleSectionProps = items;

    return (
        <section id="services" className={styles.whatWeDoSection}>
            <h2 className="flex--center"><span className="subtitle">{t('subTitle')}</span></h2>
            {titleSectionProps.map((item) => {
                return <WhatWeDoTitleSection key={crypto.randomUUID()} title={item.title} lineText={item.lineText}/>
            })}  
        </section>
    );
}