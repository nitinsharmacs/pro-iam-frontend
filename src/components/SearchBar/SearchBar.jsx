import React, { useCallback, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Paper from '@mui/material/Paper';

import { searchBar, searchIcon } from './classes.js';

const useInputFocus = (inputRef) => {
  const [searchBarClasses, setSearchBarClasses] = useState([searchBar]);

  useEffect(() => {
    inputRef.current.onblur = () => {
      setSearchBarClasses([searchBar]);
    };

    inputRef.current.onfocus = () => {
      setSearchBarClasses([...searchBarClasses, 'focus']);
    };

    inputRef.current.focus();
  }, [inputRef]);

  return searchBarClasses;
};

const SearchBar = ({ onChange, title, placeholder, focus }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const searchBarClasses = useInputFocus(inputRef);

  const onChangeHandler = useCallback((evt) => {
    setValue(evt.target.value);
    onChange(evt.target.value);
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
      />
    </Paper>
  );
};

export default SearchBar;
