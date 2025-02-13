import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Carrossel.css';


export default function Carrossel() {
    const data = [
        { id: '1', imagem: 'https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: '2', imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9_eeJOiu5Q86cN046ZqQex0lp6IgZDenb4fcj3Zj5WAIewyzU1mUZxBAFGdaONvtI0edRtiJqwVAAchx64Oij1om1l7Xy8AM3ymlCfAdPsB1sqXTOxp4BJNXe0CJJLvimAgkzmQ1QjkGkO_EUIkeVVlk1dE5j8vuxY_wnTSjouFvi-fMeqgPIRIWkOQ/s1920/pexels-liana-tril-10935417.jpg' },
        { id: '3', imagem: 'https://ims.com.br/wp-content/uploads/2020/05/1200-organizar-biblioteca.jpg'}
    ]
  return (
    <div>
          <Swiper slidesPerView={1} pagination={{clickable: true}} navigation={true} modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true}>
              {data.map((item) => (
                  <SwiperSlide key={item.id}>
                      <img src={item.imagem} alt="Slider" className='slideItem' />
                  </SwiperSlide>
              ))}
        </Swiper>
    </div>
  )
}
