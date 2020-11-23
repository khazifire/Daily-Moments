import {useState} from 'react';

export function useLocalStorage(key, defaultValue) {
    const getInitialvalue = () => localStorage.getItem(key) ?? defaultValue;
    const [value, setValue] = useState(getInitialvalue); 
    const setAndStoreValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key,newValue);
    }

return [value, setAndStoreValue];
};