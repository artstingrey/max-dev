import clsx from 'clsx';
import WhatWeDoTitleSection from './WhatWeDoTitleSection';
import styles from './whatWeDoSection.module.scss';

export default function WhatWeDoSection () {
    const titleSectionProps = [
        {
            title: 'Product Strategy',
            lineText: [
                'Product audit',
                'User flow mapping',
                'Technical consultation',
                'MVP scope definition',
                'Roadmapping',
                'Product audit',
                'User flow mapping',
                'Technical consultation',
                'MVP scope definition',
                'Roadmapping'
            ]
        },
        {
            title: 'UI/UX Design',
            lineText: [
                'Wireframes & prototyping',
                'Design systems',
                'Responsive web & mobile UI',
                'UX optimization',
                'Wireframes & prototyping',
                'Design systems',
                'Responsive web & mobile UI',
                'UX optimization'
            ]
        },
        {
            title: 'Full-Stack Development',
            lineText: [
                'Web app & SPA development',
                'Mobile (PWA / hybrid)',
                'Backend & API setup',
                'Admin panels',
                'QA & deployment',
                'Web app & SPA development',
                'Mobile (PWA / hybrid)',
                'Backend & API setup',
                'Admin panels',
                'QA & deployment'
            ]
        },
        {
            title: 'MVP Launch',
            lineText: [
                'Beta version release',
                'User testing support',
                'Iteration & adjustments',
                'Tech support during launch',
                'Performance analytics',
                'Beta version release',
                'User testing support',
                'Iteration & adjustments',
                'Tech support during launch',
                'Performance analytics'
            ]
        },
        {
            title: 'Scaling',
            lineText: [
                'Ongoing development',
                'UX/UI redesign',
                'Product growth features',
                'Team extension',
               'Ongoing development',
                'UX/UI redesign',
                'Product growth features',
                'Team extension'
            ]
        }
    ];

    return (
        <section id="services" className={styles.whatWeDoSection}>
            <h2 className="flex--center"><span className="subtitle">What We Do</span></h2>
            {titleSectionProps.map((item) => {
                return <WhatWeDoTitleSection key={crypto.randomUUID()} title={item.title} lineText={item.lineText}/>
            })}  
        </section>
    );
}