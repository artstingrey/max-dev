"use client";
import { useState } from 'react';
import RadioButton from './RadioButton';

type RadioOption = { id: string; label: string; value: string; };

type RadioGroupProp = {
    name: string;
    onValueChange?: (value: string) => void;
    data: RadioOption[];
    defaultValue?: string;
};

export default function RadioGroup({name, defaultValue = '', data, onValueChange}:RadioGroupProp) {
    const [selected, setSelected] = useState(defaultValue);
    
    const handleChange = (v: string) => {
        setSelected(v);
        onValueChange?.(v);
    };

    return (
        <>
        {data.map( (opt) => {
            return <RadioButton key={opt.id} id={opt.id} name={name} label={opt.label} value={opt.value} checked={selected === opt.value} onChange={handleChange} />
        })}
        </>
    );
}