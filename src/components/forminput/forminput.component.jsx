import './forminput.styles.scss';

const FormInput = ({handleChange, ...otherProps}) => (
    <div className="form-input">
        <input 
        placeholder="Enter your Email"   
        onFocus={(e) => e.target.placeholder = ""} 
        onChange={handleChange}
        {...otherProps}
        />
    </div>
);

export default FormInput;