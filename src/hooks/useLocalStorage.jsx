import { useState, useEffect } from 'react';


function useLocalStorage(key, initialValue) {
    // Get the value from localStorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get the value from localStorage by key
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error getting value from localStorage for key '${key}':`, error);
            return initialValue;
        }
    });

    // Function to set the value in localStorage
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        } catch (error) {
            console.error(`Error setting value in localStorage for key '${key}':`, error);
        }
    };

    useEffect(() => {
        setStoredValue((prevStoredValue) => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : prevStoredValue;
            } catch (error) {
                console.error(`Error getting value from localStorage for key '${key}':`, error);
                return prevStoredValue;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]); // Only re-run effect if key changes

    return [storedValue, setValue];
}


export default useLocalStorage;