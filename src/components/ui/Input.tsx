'use client';

import { cn } from '@/utils';
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    className?: string;
}

const Input = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
    const { className, required, type, ...inputProps } = props;

    return (
        <div className="flex flex-col w-full">
            <input
                {...inputProps}
                ref={ref}
                type={type}
                className={cn(
                    'h-9 w-full rounded-3 border bg-white px-4 font-normal py-[10px] text-xs text-black placeholder-black/50 focus:border-brand focus:outline-none border-indigo placeholder-shown:border-grey',
                    className,
                )}
                placeholder={required ? `${inputProps.placeholder}*` : inputProps.placeholder}
                required={required}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
