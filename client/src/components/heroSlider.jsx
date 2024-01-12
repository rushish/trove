import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './../styles/heroSlider.css';
import { Navigation, Autoplay } from 'swiper/modules';
import s1image from './../assets/images/slide1.jpg';

const HeroSlider = () => {

    const s1bg = {
        color: '#fff',
        backgroundImage: `url(${s1image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
    };

    const swiperParams = {
        navigation: true,
        allowTouchMove: false,
        modules: [Autoplay, Navigation],
        className: "mySwiper",
        speed: 1000,
        effect: 'slide',
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                // Remove 'active' class from all slides
                document.querySelectorAll('.swiper-slide').forEach((slide) => {
                    slide.classList.remove('active');
                });
                // Add 'active' class to the currently active slide
                const activeSlide = document.querySelector('.swiper-slide-active');
                activeSlide.classList.add('active');
            },
        },
    };
    return (
        <>
            <Swiper {...swiperParams}>
                <SwiperSlide style={s1bg}>
                    <section className='slide-content'>
                        <h1 className='hanson slide-title'>WINTER <br /><span className='slide-subtitle'>2024</span></h1>
                        <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada molestie. Aliquam.</p>
                        <button className='slide-button'><span class="noselect">VIEW COLLECTION</span></button>
                    </section>
                </SwiperSlide>
                <SwiperSlide style={s1bg}>
                    <section className='slide-content'>
                        <h1 className='hanson slide-title'>WINTER <br /><span className='slide-subtitle'>2024</span></h1>
                        <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada molestie. Aliquam.</p>
                        <button className='slide-button'><span class="noselect">VIEW COLLECTION</span></button>
                    </section>
                </SwiperSlide>
                <SwiperSlide style={s1bg}>
                    <section className='slide-content'>
                        <h1 className='hanson slide-title'>WINTER <br /><span className='slide-subtitle'>2024</span></h1>
                        <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada molestie. Aliquam.</p>
                        <button className='slide-button'><span class="noselect">VIEW COLLECTION</span></button>
                    </section>
                </SwiperSlide>
                <SwiperSlide style={s1bg}>
                    <section className='slide-content'>
                        <h1 className='hanson slide-title'>WINTER <br /><span className='slide-subtitle'>2024</span></h1>
                        <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada molestie. Aliquam.</p>
                        <button className='slide-button'><span class="noselect">VIEW COLLECTION</span></button>
                    </section>
                </SwiperSlide>
                <SwiperSlide style={s1bg}>
                    <section className='slide-content'>
                        <h1 className='hanson slide-title'>WINTER <br /><span className='slide-subtitle'>2024</span></h1>
                        <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada molestie. Aliquam.</p>
                        <button className='slide-button'><span class="noselect">VIEW COLLECTION</span></button>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default HeroSlider;