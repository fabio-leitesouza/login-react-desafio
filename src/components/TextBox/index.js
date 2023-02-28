import './style.css';

const TextBox = ({ label, value, onChange, placeholder, image, imageSecond }) => {

    const placeholderAlt = placeholder || `Digite seu ${label}`;

  return (
    <div className="text-box">
      <label className="text-box__label">{label}</label>
      <img src={image} alt='icon mail' className='text-box__icon'/>
      <input
        className="text-box__input"
        autoFocus
        value={value}
        placeholder={placeholderAlt}
        onChange={onChange}
      />      
      <img src={imageSecond} alt='' className='text-box__eye'/>
     
    </div>
  );
};  

export default TextBox;