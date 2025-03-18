import {styled} from '@vue-styled-components/core'

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;

  swiper-container {
    width: 100%;
    height: auto;
    --swiper-navigation-color: #212121;
    --swiper-pagination-color: #212121;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-size: 6px;
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`

export const Numbering = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  min-width: 100px;
  padding: 11px 10px;
  box-sizing: border-box;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  z-index: 10;

  &.type-2-2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 5px 15px;
  }

  .nav {
    flex-grow: 1;
    text-align: left;
  }

  .label {
    flex-grow: 1;
    text-align: right;
  }
`

export const Navigation = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);

  button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  &.nav-small button {
    font-size: 12px;
    padding: 5px;
  }

  &.nav-medium button {
    font-size: 16px;
    padding: 10px;
  }
`
