import styles from './HowWeWork.module.scss';

type HowWeWorkCellProps = {
    number: string;
    title: string;
    text: string;
};

export default function HowWeWorkCell ({number, title, text}:HowWeWorkCellProps) {
    return (
        <div className={styles.howWeWorkCell}>
          <p className={styles.cellNumber}>{number}</p>
          <div>
            <p className={styles.cellTitle}>{title}</p>
            <p className={styles.cellText}>{text}</p>
          </div>
        </div>
    );
}