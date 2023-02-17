import { InputBase, styled } from "@mui/material";
import SearchIcon from "../../icons/SearchIcon"
// styled component
const StyledInputBase = styled(InputBase)(({disable_border }) => ({
  height: 45,
  fontSize: 12,
  width: "100%",
  maxWidth: 480,
  fontWeight: 600,
  padding: "0 1rem",
  background: 'white',
  borderRadius: "8px",
})); // ------------------------------------------------------------

// ------------------------------------------------------------
const SearchInput = (props) => {
  const { icon_style = {},} = props;
  return (
    <StyledInputBase
      startAdornment={
        <SearchIcon
          sx={{
            fontSize: 18,
            marginRight: 1,
            color: "text.disabled",
            ...icon_style,
          }}
        />
      }
      {...props}
    />
  );
};

export default SearchInput;
