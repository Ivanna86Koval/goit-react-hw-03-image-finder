import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import {
  HeaderSearchBar,
  Input,
  SearchBtn,
  SearchForm,
  SearchSpan,
} from './Searchbar.styled.js';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search.trim());
  };

  render() {
    return (
      <HeaderSearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn>
            <BsSearch />
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
