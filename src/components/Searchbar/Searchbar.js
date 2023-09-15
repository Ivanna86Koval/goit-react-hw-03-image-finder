import PropTypes from 'prop-types';
import { Component } from 'react';
//import { BsSearch } from '@react-icons/all-files/fa/FaBeer';

import {
  HeaderSearchBar,
  Input,
  SearchBtn,
  SearchForm,
  SearchSpan,
} from './Searchbar.styled.js';

export class Searchbar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <HeaderSearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn>
            <SearchSpan>Search</SearchSpan>
          </SearchBtn>
          <Input
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
