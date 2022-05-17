import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <>
      <Typography
        variant={'subtitle1'}
        fontWeight={600}
        gutterBottom
        htmlFor={props.field}
      >
        {props.label}
      </Typography>
      <StyledTextField
        {...field}
        select
        fullWidth
        size='small'
        value={selectedValue ? selectedValue : ''}
        SelectProps={{
          native: true,
        }}
        InputProps={{
          startAdornment: (
            <Box
              mr={1}
              sx={{ position: 'relative', top: 3, color: 'text.secondary' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Box>
          ),
        }}
      >
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledTextField>
    </>
  );
}

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
