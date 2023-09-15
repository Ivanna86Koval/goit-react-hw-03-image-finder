import { fetchImages } from 'api';
import { Component } from 'react';
import Modal from 'react-modal';
//import * as API from './api';
import { Button } from './components/Button/Button';
//import { Loader } from './components/Loader/Loader';
//import { Modal } from './components/Modal/Modal';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNr: 1,
    modalOpen: false,
    modalImg: null,
    modalAlt: '',
    totalPages: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.currentSearch !== this.state.currentSearch ||
      prevState.pageNr !== this.state.pageNr
    ) {
      this.addImages();
    }
  }

  addImages = async () => {
    const { currentSearch, pageNr } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await fetchImages(currentSearch, pageNr);

      if (data.hits.length === 0) {
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      const normalizedImages = fetchImages.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = inputValue => {
    this.setState({
      images: [],
      isLoading: false,
      currentSearch: inputValue,
      pageNr: 1,
    });
  };

  handleClickMore = () => {
    this.setState(prevState => ({
      pageNr: prevState.pageNr + 1,
    }));
  };

  handleImageClick = image => {
    this.setState({ modalImg: image, modalOpen: true });
    document.body.style.overflow = 'hidden';
  };

  handleModalClose = () => {
    this.setState({ modalImg: null, modalOpen: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { images, isLoading, pageNr, modalImg, modalOpen, totalPages } =
      this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <ToastContainer transition={Slide} />
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} onItemClick={this.handleImageClick} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 30,
            }}
          >
            Gallery is empty...
          </p>
        )}

        {images.length > 0 && totalPages !== pageNr && !isLoading && (
          <Button onClick={this.handleClickMore} />
        )}
        {modalOpen && (
          <Modal image={modalImg} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}

export default App;
