import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useBlogs } from "../stores/useBlogs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { searchBlogs } = useBlogs();

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.replace(/ /g, "%20");
    searchBlogs(query);
    navigate("/search");
  };

  return (
    <div className="py-2">
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          label="Search by tags"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
          crossOrigin="anonymous"
        />
        <Button
          size="sm"
          color={search ? "purple" : "blue-gray"}
          disabled={!search}
          onClick={handleSearch}
          className="!absolute right-1 top-1 rounded"
        >
          search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
