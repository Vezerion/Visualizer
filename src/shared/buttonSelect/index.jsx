import classnames from 'classnames/bind';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

const cn = classnames.bind(styles);

const ButtonSelect = ({ elements, disabled, wrapperClassName }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({type: 'SORT/SET_SORT', value: event.target.value});
  };

  return (
    <div className={ cn('wrapper', wrapperClassName) }>
      <select onChange={handleChange}>
      {
        elements.map(({ text }, index) => (
          <option
            key={ index }
            className={ cn('button', { 'button--disabled': disabled }) }
          >
            { text }
          </option>
        ))
      }
      </select>
    </div>
  );
};

export default ButtonSelect;