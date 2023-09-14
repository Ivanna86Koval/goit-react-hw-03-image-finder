import { fetchSearch } from 'api';
import { Component } from 'react';

export class App extends Component {
  state = {
    image: '',
    photos: [],
    page: 1,
    max_page: null,
    per_page: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({
          spiner: true,
        });
        const image = await fetchSearch(
          this.state.search,
          this.state.page,
          this.state.per_page
        );
        const { hits, totalHits } = image;
        //
      } catch (error) {}
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
