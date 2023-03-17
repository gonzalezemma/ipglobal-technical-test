import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLazySearchMovieQuery } from "@store/api/movies";
import { SEARCH } from "@constants/routes";

const SearchMovie = () => {
  const [triggerSearch] = useLazySearchMovieQuery();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await triggerSearch(search).unwrap();

    if (response) {
      navigate(`${SEARCH}${search}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={search}
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          ),
        }}
        size="small"
        sx={{
          "& fieldset": {
            border: 2,
            borderRadius: 20,
          },
        }}
      />
    </form>
  );
};

export default SearchMovie;
