import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} className='contact-form'>
      <h2 className='welcome1 welcome'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>

      <div class='input-fields'>
      <input  
            type='text'
            name='name'
            value={name}
                  onChange={onChange}
                  placeholder='First Name'
                  class='input-line full-width'>   
            </input>
   
          
                <input
                  
                  name="email"
                  type='email'
                  placeholder='Email'
                  onChange={onChange}
          class='input-line full-width'>
          
        </input>
        

        <input
                  
                  type='text'
                  placeholder='Phone'
                  name='phone'
                  value={phone}
                  onChange={onChange}
          class='input-line full-width'>
          
          </input>
      
        
      </div>
     <div className="type">
      <h3 className='subtitle subtitle-1 '>Contact Type</h3>
      <input
       
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
        
      />{' '}
      <span className='subtitle subtitle-2'>Personal{' '}</span>
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <span className='subtitle subtitle-2'> Professional</span>

      </div>
      <div>
      
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='ghost-round full-width yellow-text'
         
        />
      </div>
      {current && (
        <div>
          <input
            onClick={clearAll}
          type='submit'
          value='Clear'
          className='ghost-round full-width yellow-text'
         
        />
          
      
        </div>
      )}
    </form>
  );
};

export default ContactForm;
