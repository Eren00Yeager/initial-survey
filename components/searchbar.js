import { useRouter } from "next/router";
import { useState } from "react";
import searchStyles from "../styles/searchbar.module.css";

const SearchBar = ({ comp, setCompany, setCId }) => {
  const [companyToSearch, setCompanySearch] = useState("");
  const changedSearch = (event) => {
    setCompanySearch(event.target.value);
    setCompany(event.target.value);
    const temp = comp.filter((item) => {
        return event.target.value.toLowerCase() == item.Name.toLowerCase();
      });
      if (temp.length>=1 && temp[0].mailId) {
        setCId(temp[0].mailId);
      } else {
        setCId("Does not Exist");
    }
    
  };

  const isEnter = (event) => {
    if (event.keyCode == 13) {
      setCompanySearch(event.target.value);
      setCompany(event.target.value);
      const temp = comp.filter((item) => {
        return event.target.value.toLowerCase() == item.Name.toLowerCase();
      });
      if (temp.length>=1 && temp[0].mailId) {
        setCId(temp[0].mailId);
      } else {
        setCId("Does not Exist");
      }
    }
  };

  const onSearch = (searchTerm, searchId) => {
    setCompanySearch(searchTerm);
    setCompany(searchTerm);
    console.log(searchId);
    setCId(searchId);
  };

  function isValid(nameinDb, enteredName) {
    enteredName = enteredName.toLowerCase();
    nameinDb = nameinDb.toLowerCase();
    let m = enteredName.length;
    let n = nameinDb.length;

    let allGood = 0;
    let j = 0;
    let i = 0;
    if (enteredName[i] != nameinDb[j]) {
      if (m > 2 && nameinDb.includes(enteredName)) {
        return 1;
      }
      return 0;
    }
    j++;
    for (i = 1; i < m; ++i) {
      if (allGood >= 2) {
        return 0;
      }
      if (enteredName[i] == nameinDb[j]) {
        allGood = 0;
        j++;
      } else {
        allGood++;
      }
    }

    return 1;
  }

  return (
    <div className={searchStyles.App}>
      <div className={searchStyles.searchInner}>
        <input
          type="text"
          value={companyToSearch}
          placeholder="Enter Company Name"
          onChange={changedSearch}
          className={searchStyles.forInput}
          onKeyUp={isEnter}
        />
      </div>
      {/* implementing scroll view for this div required */}
      <div className={searchStyles.idrop}>
        <div className={searchStyles.dropdown}>
          {comp
            .filter((item) => {
              const searchTerm = companyToSearch.toLowerCase();
              const fullName = item.Name.toLowerCase();

              return (
                searchTerm &&
                (fullName.startsWith(searchTerm) ||
                  isValid(fullName, searchTerm))
                    &&
                  fullName !== searchTerm
              );
            })
            .map((item) => (
              <div
                onClick={() => onSearch(item.Name, item.mailId)}
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
