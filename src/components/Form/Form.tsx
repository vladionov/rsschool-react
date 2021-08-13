import React, { FormEvent, useState, useEffect } from 'react';

import './Form.scss';
import { IErrors, IFormProps } from '../../types';

const Form: React.FC<IFormProps> = ({ updateValues }) => {
  const [username, setUsername] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [city, setCity] = useState<string>('Minsk');
  const [checked, setChecked] = useState<boolean>(false);
  const [isMale, setIsMale] = useState<boolean>(true);

  const [errors, setErrors] = useState<IErrors>({});

  useEffect(() => {
    function handleValidateForm() {
      setErrors({});
      if (!checked) {
        setErrors((state) => ({ ...state, checked }));
      }
      if (username === '' || username.length < 4) {
        setErrors((state) => ({ ...state, username }));
      }
      if (birth === '') {
        setErrors((state) => ({ ...state, birth }));
      }
    }

    handleValidateForm();
  }, [checked, username, birth]);

  function handleSelectSex() {
    setIsMale(!isMale);
  }

  function handleResetFormData() {
    setUsername('');
    setBirth('');
    setCity('Minsk');
    setChecked(false);
    setIsMale(true);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      updateValues({ username, birth, city, checked, isMale });
      handleResetFormData();
    }
  };

  return (
    <form className="App-Form" onSubmit={handleSubmit}>
      <label htmlFor="username" className="Form__username">
        Username:{' '}
        {username === '' && username.length < 4 && <span className="error">Min 4 symbols</span>}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="birthDate" className="Form__birth">
        Birth Date: {birth === '' && <span className="error">Select date</span>}
        <input
          type="date"
          name="birthDate"
          value={birth}
          onChange={(event) => {
            setBirth(event.target.value);
          }}
        />
      </label>
      <label htmlFor="city" className="Form__city">
        City
        <select name="city" value={city} onChange={(event) => setCity(event.target.value)}>
          <option value="Minsk">Minsk</option>
          <option value="London">London</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Moscow">Moscow</option>
          <option value="New-York">New-York</option>
        </select>
      </label>
      <div
        className="Form__switcher"
        onClick={handleSelectSex}
        onKeyDown={handleSelectSex}
        role="radiogroup"
        tabIndex={0}
      >
        <span className={isMale ? 'active' : ''} role="radio" aria-checked="true">
          Male
        </span>
        <span className={!isMale ? 'active' : ''} role="radio" aria-checked="false">
          Female
        </span>
      </div>
      <label htmlFor="gdpr" className="Form__gdpr">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <span className="checked">I agree</span>
        {errors?.checked !== undefined && <p className="error">* require</p>}
      </label>

      <button type="submit" className="Form__btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
