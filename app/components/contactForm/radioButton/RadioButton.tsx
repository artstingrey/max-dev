import clsx from 'clsx';

type RadioButtonProp = {
    id: string,
    label: string,
    name: string,
    value: string,
    checked: boolean,
    onChange: (value: string) => void,
};

export default function RadioButton ({id = '', label = '', name = '', value = '', checked = false, onChange}:RadioButtonProp) {

    return (
        <div className={clsx("s-choise-container", checked ? 'active' : '')}>
            <div className={clsx("s-checkbox", checked ? 'active' : '')}>
                <input type="radio" id={id} name={name} value={value} checked={checked} onChange={(e) => onChange(e.target.value)} />
                <span className="svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_94_1179)">
                        <mask id="mask0_94_1179" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_94_1179)">
                        <path className='active-path' d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className='active-path-check' opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_94_1179">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            </div>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}