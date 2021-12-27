import React from 'react';
import Email from '../../../assets/images/Email.svg';

function Mailmverify() {
  return (
    <div className='main'>
      <div class='container'>
        <img src={Email} alt='SVG as an image' />

        <h2>Verify Email ID</h2>
        <p className='mailtext'>
          We have sent verification link to{' '}
          <a href='#'>sushil@hdfclife.com. </a>{' '}
        </p>
        <p className='mailtext'>
          {' '}
          Please click on the verification link received in the email to verify
          your email address.
        </p>
        <p>
          If you didn't receive the mail.
          <a href='#'>Click Here</a> to resend the mail
        </p>

        <button className='btn btn-outline-info btn-lg'>Back To Profile</button>
      </div>
    </div>
  );
}

export default Mailmverify;
