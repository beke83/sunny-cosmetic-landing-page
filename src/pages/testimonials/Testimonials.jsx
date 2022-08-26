import React, { useEffect, useState } from 'react';
import './testimonials.css';
import TestimonialImg from '../../assets/testimonial-img.svg';
import Tada from 'react-reveal/Tada';
import { Rotate, Slide, Zoom } from 'react-reveal';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState('tab1');

  return (
    <div className='testimonial testimonial-padding'>
      <div className="testimonial-img">
        <img src={TestimonialImg} alt="testimonial-img" />
      </div>
      <div className="testimonial-content">
        <h6>Customer story</h6>
        {testimonials === 'tab1' && (
          <>
            <Rotate>
              <h3>Quick and best results. You are the best!</h3>
            </Rotate>
            <Slide right>
              <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
              <p>There are many variations of to this product and I love it all.”</p>
            </Slide>
            <Tada>
              <h4>Dragos Gontariu</h4>
              <h5>Mareting Manager</h5>
            </Tada>
          </>
        )}
        {testimonials === 'tab2' && (
          <>
            <Rotate>
              <h3>Great and improved product. You are the best!</h3>
            </Rotate>
            <Slide>
              <p>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p>From the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.”</p>
            </Slide>
            <Tada>
              <h4>Elizabeth lore</h4>
              <h5>Manager</h5>
            </Tada>
          </>
        )}
        {testimonials === 'tab3' && (
          <>
            <Rotate>
              <h3>Wonderful product. It is the best!</h3>
            </Rotate>
            <Zoom>
              <p>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline ”</p>
            </Zoom>
            <Tada>
              <h4>Pence Sharon</h4>
              <h5>Executive Manager</h5>
            </Tada>
          </>
        )}
        <div className='testi-scroll'>
          <div className={testimonials === 'tab1' ? 'testimonial-ellipses' : 'testimonial-ellipses-active'}
            onClick={() => setTestimonials('tab1')} />

          <div className={testimonials === 'tab2' ? 'testimonial-ellipses' : 'testimonial-ellipses-active'}
            onClick={() => setTestimonials('tab2')} />

          <div className={testimonials === 'tab3' ? 'testimonial-ellipses' : 'testimonial-ellipses-active'}
            onClick={() => setTestimonials('tab3')} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
