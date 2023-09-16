import React from "react";
import { Input, Button } from "@material-tailwind/react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        label="Search blog"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={search ? "purple" : "blue-gray"}
        disabled={!search}
        className="!absolute right-1 top-1 rounded"
      >
        search
      </Button>
    </div>
  );
};

export default SearchBar;
