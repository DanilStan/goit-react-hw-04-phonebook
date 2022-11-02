import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ handleChangeFilter, value }) {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={handleChangeFilter} />
    </Label>
  );
}

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
