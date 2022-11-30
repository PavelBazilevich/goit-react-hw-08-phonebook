import css from 'components/ContactForm/ContactForm.module.css';
import { FilterBox } from './Filter.styled';
import { performFilter } from 'Redux/contacts/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const hendleFilter = e => {
    dispatch(performFilter(e.currentTarget.value));
  };
  return (
    <FilterBox>
      <h3>Find contacts by name</h3>
      <input
        className={css.input}
        placeholder="Who are you looking for?"
        onChange={hendleFilter}
        value={filter}
      ></input>
    </FilterBox>
  );
};
