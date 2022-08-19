import React, { useEffect, useState } from 'react';
import './testimonials.css';
import TestimonialImg from '../../assets/testimonial-img.svg';

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
            <h3>Quick and best results. You are the best!</h3>
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            <p>There are many variations of passages of Lorem Ipsum available.”</p>
            <h4>Dragos Gontariu</h4>
            <h5>Mareting Manager</h5>
          </>
        )}
        {testimonials === 'tab2' && (
          <>
            <h3>Great and improved product. You are the best!</h3>
            <p>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <p>From the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.”</p>
            <h4>Elizabeth lore</h4>
            <h5>Manager</h5>
          </>
        )}
        {testimonials === 'tab3' && (
          <>
            <h3>Wonderful product. It is the best!</h3>
            <p>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline ”</p>
            <h4>Pence Sharon</h4>
            <h5>Executive Manager</h5>
          </>
        )}
        <div className='testi-scroll'>
          <div className='testimonial-ellipses'
            onClick={() => setTestimonials('tab1')} />
          <div className='testimonial-ellipses'
            onClick={() => setTestimonials('tab2')} />
          <div className='testimonial-ellipses'
            onClick={() => setTestimonials('tab3')} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
