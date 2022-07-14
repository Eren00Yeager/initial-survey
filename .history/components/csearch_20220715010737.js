import { useRouter } from "next/router";
import { useState } from "react";
// import searchStyles from "../styles/searchbar.module.css";

const SearchBar = ({comp}) => {
  
  return (
    <div >
      <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="text" placeholder="company name" />
      </Form.Group>
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
