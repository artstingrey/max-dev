import styles from './HowWeWork.module.scss';

type HowWeWorkCellProps = {
    number: string;
    title: string;
    text: string;
    offset?: number;
};

export default function HowWeWorkCell ({number, title, text, offset = 0}:HowWeWorkCellProps) {
    return (
        <div className={styles.howWeWorkCell} style={{transform: `translateY(${offset}px)`}}>
          <p className={styles.cellNumber}>{number}</p>
          <div>
            <p className={styles.cellTitle}>{title}</p>
            <p className={styles.cellText}>{text}</p>
          </div>
        </div>
    );
}