import React, {useState} from 'react';
//motion
import {motion} from 'framer-motion';
// variants
import { fadeIn } from '../variants'
// emailjs
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='py-16 lg:section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amoutn: 0.3}}
            className='flex-1 flex justify-start items-center'
          >
                        <div>
              <h4 className='text-x1 uppercase text-accent font medium mb-2
              tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
                    {/* form */}
                    <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amoutn: 0.3}}
            className='flex-1 border rounded-lg flex flex-col gap-y-6
            pb-24 p-6 items-start'
          >
                        <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              name='name' id='name'
              type='text'
              placeholder='Your name' 
            />
                        <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              name='email' id='email'
              type='text'
              placeholder='Your email' 
            />
                        <textarea name='message' id='message'
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize-none mb-12' 
              placeholder='Your message'
            ></textarea>
            <button id='btn-send' type='submit' className='btn btn-sm'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;