import HowWeWorkCell from "./HowWeWorkCell";
import { HowWeWorkProps } from "./HowWeWorkCellsContainer";
import styles from './HowWeWork.module.scss';

export default function HowWeworkDesctop ({items}:HowWeWorkProps) {
    return (
        <div className={styles.cellContainer}>
            {items.map((item, index) => {
                return <HowWeWorkCell key={index} number={'0' + (index + 1) + '.'} title={item.title} text={item.text}/>
            })}
        </div>
    );
}