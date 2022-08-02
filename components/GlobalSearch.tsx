import { Button, InputAdornment, TextField } from "@mui/material";
import Icon from "./Icon";

interface Props {
  classnames?: string;
}

const GlobalSearch: React.FC<Props> = ({ classnames }) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      className={`search-bar ${classnames}`}
      color="primary"
      size="small"
      placeholder="Search the site"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              color="primary"
              style={{ padding: 0, minWidth: 16 }}
            >
              <Icon type="search" />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default GlobalSearch;
