import React, {memo, useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = async e => {
        handleSearch();
    };

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src="/images/logo.webp"
                    alt="logo"/>
                <h1>Youtube</h1>
            </div>
            <input
                placeholder='Search..'
                ref={inputRef}
                onKeyPress={onKeyPress}/>
                <button
                    type="submit"
                    onClick={onClick}
                    ><i className="fa-solid fa-magnifying-glass"></i>
                </button>
        </header>
    )
})

export default SearchHeader;