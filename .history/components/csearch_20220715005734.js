import { useRouter } from "next/router";
import { useState } from "react";
// import searchStyles from "../styles/searchbar.module.css";

const SearchBar = ({ comp}) => {
  
  return (
    <div className={searchStyles.App}>
      <div className={searchStyles.searchInner}>
        <input
          type="text"
          maxLength="15"
          placeholder="zolvit"
         
        />
      </div>
      {/* implementing scroll view for this div required */}
      <div className={searchStyles.idrop}>
        <div className={searchStyles.dropdown}>
          {comp.filter((item) => {
              const searchTerm = companyToSearch.toLowerCase();
              const fullName = item.Name.toLowerCase();

              return (
                searchTerm &&
                (fullName.startsWith(searchTerm) ||
                  isValid(fullName, searchTerm))
                //     &&
                //   fullName !== searchTerm
              );
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
