import HowWeWorkCell from "./HowWeWorkCell";
import styles from './HowWeWork.module.scss';

export default function HowWeworkDesctop () {
    return (
        <div className={styles.cellContainer}>
            <HowWeWorkCell number="01." title="You tell us the idea" text="Tell us what you want to build, your goals, your audience, and what success looks like."/>
            <HowWeWorkCell number="02." title="We pick the solution" text="Together we decide: MVP from scratch or a ready white-label base — lean and focused."/>  
            <HowWeWorkCell number="03." title="We design & build" text="We handle UI/UX, development, testing, and iteration — in weekly sprints with full transparency."/>
            <HowWeWorkCell number="04." title="You launch & get first clients" text="We deploy your product, support the release, set up marketing and stay in touch for scaling."/>
            <HowWeWorkCell number="05." title="We grow your business" text="From scaling to improvements — we stay by your side to put your business on solid ground."/>
        </div>
    );
}