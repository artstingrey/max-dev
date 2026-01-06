import clsx from 'clsx';
import SButton from '../core/buttons/sButton';
import styles from './TextSection.module.scss';


export default function TextSection () {
    return (
        <section className={styles.textSection}>
            <div className={styles.textSectionWrapper}>
                <h3>Need just design? Dev only?<br /> We plug in where you need us.</h3>
                <div className={clsx("button-wrap button-wrap--center", styles.button)}>
                    <SButton text="Let's chat" url="#" icon={true}/>
                </div>
            </div>
        </section>
    );
}