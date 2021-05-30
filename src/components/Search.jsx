/* eslint-disable no-use-before-define */
import { InputAdornment } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { SearchRounded } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { Products } from "../utils/data";

export default function Search() {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={Products.map((product) => product.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          size="small"
          variant="outlined"
          placeholder="Cari Barang Idamanmu Sekarang!"
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
