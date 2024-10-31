import React, { ChangeEventHandler, FC } from 'react';

interface InputProps {
    id: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ id, type = 'text', placeholder, value, onChange }) => (
    <input
        id={id}
        name={id}
        type={type}
        className="border-2 border-gray-300 rounded py-2 px-4 min-w-[300px] w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

export default Input;
