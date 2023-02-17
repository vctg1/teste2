import { InputBase, styled } from "@mui/material";

const StyledInputBase = styled(InputBase)(({disable_border }) => ({
  height: 45,
  fontSize: 12,
  width: "100%",
  fontWeight: 600,
  padding: "0 1rem",
  background: 'white',
  borderRadius: "8px",
})); // ------------------------------------------------------------

// ------------------------------------------------------------
const InputBasic = (props) => {
  return (
    <StyledInputBase 
      {...props}
    />
  );
};

export default InputBasic;
