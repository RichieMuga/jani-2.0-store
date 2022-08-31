import styles from '../styles/FormRow.module.css'

const FormRow = ({ type, name, value, handleChange, labelText, placeholder, form_label, form_input, form_row }) => {
    return (
        <div className={form_row}>
            <label htmlFor={name} className={form_label}>
                {labelText || name}
            </label>

            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className={form_input}
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormRow