import React, { useState, useEffect } from 'react';
import { Moon, Sun } from "lucide-react";


const DarkModeToggle = (props) => {
    const [theme, setTheme] = useState(null);

    const toggleDarkMode = () => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
            }
            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
    }, [])
    return (
        <>
            <button id='theme-toggle' type='button' onClick={toggleDarkMode}
                className='dark:text-gray-400 focus:outline-none rounded-lg p-2.5'>
                {theme === 'dark' ? <Moon /> : <Sun />}
            </button>
        </>
    )
}

export default DarkModeToggle;
