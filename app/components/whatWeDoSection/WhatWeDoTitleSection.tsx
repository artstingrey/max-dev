import clsx from 'clsx';
import styles from './whatWeDoSection.module.scss';

type WhatWeDoItemProps = {
    title: string;
    lineText: string[];
};

export default function WhatWeDoTitleSection ({title, lineText}:WhatWeDoItemProps) {
    return (
        <div className={styles.titleSection}>
            <p>{title}</p>
            <div className={clsx('ticker-wrapper', styles.titleRunningLine)}>
                <div className="ticker-wrapper__first-half">
                    {lineText.map((text) => {
                        return <p className='ticker-item' key={crypto.randomUUID()}>{text}</p>
                    })}
                </div>

                <div className="ticker-wrapper__second-half">
                   {lineText.map((text) => {
                        return <p className='ticker-item' key={crypto.randomUUID()}>{text}</p>
                    })}
                </div>
            </div>
        </div> 
    );
}