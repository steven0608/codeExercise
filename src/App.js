import React, { Component } from 'react';
import './App.css';
import imageList from './imageList';
import ImageCard from './imageCard'

class App extends Component {

  state = {
    imageList: [],
    orderClick:0,
  }

  componentDidMount() {
    if (!!localStorage.getItem('state')) {
      const localStorageState = JSON.parse(localStorage.getItem('state'))
      // console.log("check this", localStorageState)
      this.setState({
        imageList: localStorageState.imageList,
        orderClick: localStorageState.orderClick,
      })
    } else {
      this.setState({
        imageList,
      }, () => {
      localStorage.setItem('state', JSON.stringify(this.state));
      })
    }
  }

  updateAllState = (image) => {
    const updateImageList = this.state.imageList.map(img =>{
      if (img.id === image.id) {
        img.clickCount++
        img.clickOrder = this.state.orderClick + 1
      }
      return img
    }).sort((a, b) => b.clickCount - a.clickCount);
    this.setState({
      imageList: updateImageList,
      orderClick: this.state.orderClick + 1
      }, () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    })
  }


updateImageListState = (image) => {
  const updateImageList = this.state.imageList.map(img =>{
    if (img.id === image.id) {
      img.clickCount++
    }
      return img
    }).sort((a, b) => b.clickCount - a.clickCount);
    this.setState({
      imageList: updateImageList,
      }, () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    })
  }


  handleClick = (image) => {
    if (image.clickOrder === 0) {
      this.updateAllState(image)
      } else {
        this.updateImageListState(image)
    }
  }


  render() {
    return (
      <div className="twoColumn">
        {this.state.imageList.map(image=> <ImageCard image={image} key={image.id} handleClick={this.handleClick}/>)}
      </div>
    );
  }
}

export default App;
