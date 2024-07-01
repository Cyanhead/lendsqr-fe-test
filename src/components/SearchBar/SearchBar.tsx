import Icons from '../../uikit/Icons';
import Icon from '../../uikit/Icon';
import Input from '../Input';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      <Input
        type="text"
        classes={styles.input}
        placeholder="Search for anything"
        id="search"
        name="search"
        value={query}
        onChange={handleInput}
      />
      <button type="submit" className={styles.searchButton}>
        <Icon src={Icons.Search} />
      </button>
    </form>
  );
};

export default SearchBar;
