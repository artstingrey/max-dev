"use client";
import clsx from 'clsx';
import { useState } from 'react';

type CheckboxProp = {
    id: string,
    label: string
};

export default function Checkbox ({id = '', label = ''}:CheckboxProp) {
    const [checked,setChecked] = useState(false);

    return (
        <div className={clsx("s-choise-container", checked ? 'active' : '')}>
            <div className={clsx("s-checkbox", checked ? 'active' : '')}>
                <input type="checkbox" id={id} onChange={(e) => setChecked(e.target.checked)} name="interested" value={label} checked={checked}/>
                <span className="svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_94_1110)">
                        <mask id="mask0_94_1110" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M24 0H0V24H24V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_94_1110)">
                        <path className="active-path" d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round"/>
                        <path className="active-path-check" opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="square"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_94_1110">
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