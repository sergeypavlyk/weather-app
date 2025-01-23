'use client';

import { modes } from '@/constants';
import { useEffect, useState } from 'react';

export default function ModeSection() {
    const [activeTheme, setActiveTheme] = useState<string>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'system' || !savedTheme) {
            applySystemTheme();
            setActiveTheme('system');
        } else {
            applyTheme(savedTheme);
            setActiveTheme(savedTheme);
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = () => {
            if (!savedTheme || savedTheme === 'system') {
                applySystemTheme();
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    const applyTheme = (theme: string) => {
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else if (theme === 'light') document.documentElement.classList.remove('dark');
    };

    const handleThemeChange = (newTheme: string) => {
        setActiveTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'system') applySystemTheme();
        else applyTheme(newTheme);
    };

    const applySystemTheme = () => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    return (
        <section className="flex items-center justify-center flex-wrap gap-4">
            {modes.map((mode) => (
                <button
                    onClick={() => handleThemeChange(mode)}
                    className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out rounded-lg font-semibold py-[10px] px-4 capitalize ${
                        activeTheme === mode
                            ? 'bg-cyan-800 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
                            : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
                    }`}
                    key={mode}
                >
                    {mode} Theme
                </button>
            ))}
        </section>
    );
}
