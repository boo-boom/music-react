import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSwiper from 'react-id-swiper';
import './swiper.scss';
import './style.scss';

class Swiper extends Component {
  render() {
    const params = {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };
    const { banners } = this.props;
    return (
      banners.length ? 
      <div className="react-id-swiper">
        <ReactSwiper {...params}>
          {
            banners.map(item => {
              return (
                <div className="swiper-id-item" key={item.imageUrl}>
                  <div className="item">
                    <img src={item.imageUrl} alt=""/>
                  </div>
                </div>
              )
            })
          }
        </ReactSwiper>
      </div>
      : <div className="react-id-swiper"></div>
    )
  }
}

Swiper.propTypes = {
  banners: PropTypes.array.isRequired
}

export default Swiper;