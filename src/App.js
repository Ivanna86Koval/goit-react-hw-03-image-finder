import { Component } from 'react';
import { fetchSearch } from 'api';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Searchbar } from './components/Searchbar/Searchbar';
import { RootStyle } from './components/RootStyle/RootStyle.styled';
import { Bars } from 'react-loader-spinner';
import { Button } from 'components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loadMoreVisibility: false,
    spinner: false,
    max_page: null,
    per_page: 12,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      try {
        this.setState({
          spinner: true,
        });
        const images = await fetchSearch(this.state.search, this.state.page, this.state.per_page)
        const { hits, totalHits } = images;

        this.setState({
          images: [...this.state.images, ...hits],
          totalHits: totalHits,
          max_page: Math.ceil(totalHits / this.state.per_page)
        })
      
        if (this.state.page > 1) {
          return
        } else {
          toast.success(`We found ${totalHits} photos.`, {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        
      } catch (error) {
        this.setState({ error: true });
        toast.error('Something wrong. Try again.', {
          position: toast.POSITION.TOP_RIGHT
        })
      } finally {
        this.setState({
          spinner: false,
        });
      }
    }
  }

  loadMore = e => {
    if (this.state.page >= this.state.max_page) {
      toast.error('There are no more images for this request');
      this.setState({
        loadMoreVisibility: true,
      });
      return;
    }
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onGetSearch = (word) => {
    if (this.state.search !== word && word) {
      this.setState({
        search: word,
        images: [],
        page: 1,
        error: false,
      });
    } else if (!word) {
      toast.info('Please fill in field', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onGetSearch} />
        {this.state.spinner && (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            visible={true}
          />
        )}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && !this.state.loadMoreVisibility && (
          <Button loadMore={this.loadMore} />
        )}
        <ToastContainer />
        <RootStyle></RootStyle>
      </div>
    );
  }
}
