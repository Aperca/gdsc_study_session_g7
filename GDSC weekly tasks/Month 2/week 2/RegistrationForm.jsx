import React, { useState } from 'react';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInterestChange = (interest) => {
    const updatedInterests = interests.includes(interest)
      ? interests.filter((item) => item !== interest)
      : [...interests, interest];
    setInterests(updatedInterests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', {
      fullName,
      email,
      phoneNumber,
      gender,
      interests,
      country,
      acceptTerms,
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '2px solid #333', borderRadius: '10px' }}>
      <h2 style={{ color: '#4CAF50' }}>Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{ color: '#333' }}>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ color: '#333' }}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ color: '#333' }}>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ color: '#333' }}>
          Gender:
          <div style={{ display: 'flex', gap: '10px' }}>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={() => setGender('other')}
              />
              Other
            </label>
          </div>
        </label>

        <label style={{ color: '#333' }}>
          Interests:
          <div style={{ display: 'flex', gap: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={interests.includes('sports')}
                onChange={() => handleInterestChange('sports')}
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                checked={interests.includes('music')}
                onChange={() => handleInterestChange('music')}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                checked={interests.includes('travel')}
                onChange={() => handleInterestChange('travel')}
              />
              Travel
            </label>
          </div>
        </label>

        <label style={{ color: '#333' }}>
          Country:
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Select...</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label style={{ color: '#333' }}>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          Accept Terms and Conditions
        </label>

        <button type="submit" disabled={!acceptTerms} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
