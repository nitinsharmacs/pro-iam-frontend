import React, { useCallback, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Paper from '@mui/material/Paper';

import { searchBar, searchIcon } from './classes.js';

const SearchBar = ({ onChange, title, placeholder, focus }) => {
  const [value, setValue] = useState('');
  const [searchBarClasses, setSearchBarClasses] = useState([searchBar]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
      inputRef.current.onblur = () => {
        setSearchBarClasses([searchBar]);
      };
      setSearchBarClasses([...searchBarClasses, 'focus']);
    }
  }, [inputRef]);

  const onChangeHandler = useCallback((evt) => {
    setValue(evt.target.value);
    onChange(evt.target.value);
  });

  const onInputFocus = useCallback((evt) => {
    setSearchBarClasses([...searchBarClasses, 'focus']);
  });

  return (
    <Paper className={searchBarClasses.join(' ')} title={title}>
      <div className={searchIcon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        ref={inputRef}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onFocus={onInputFocus}
      />
    </Paper>
  );
};

export default SearchBar;
