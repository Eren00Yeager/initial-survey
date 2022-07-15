import { useRouter } from "next/router";
import { useState } from "react";
// import searchStyles from "../styles/searchbar.module.css";

const SearchBar = ({comp}) => {
  
  return (
    <div >
      <div >
        <input
          type="text"
          maxLength="15"
          placeholder="zolvit"
         
        />
      </div>
      {/* implementing scroll view for this div required */}
      <div>
        <div>
          {comp.filter((item) => {
              const searchTerm = companyToSearch.toLowerCase();
              const fullName = item.Name.toLowerCase();

              return (
                searchTerm && fullName.startsWith(searchTerm)
                )
            })
            .map((item) => (
              <div
                // onClick={() => onSearch(item.Name, item.mailId)}
                className={searchStyles.dropdownRow}
                key={item.Name}
              >
                {item.Name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
