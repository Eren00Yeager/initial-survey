import { useRouter } from "next/router";
import { useState } from "react";
// import searchStyles from "../styles/searchbar.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from "react";

const SearchBar = ({comp}) => {
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
  return (
    <div>
      <Form.Group className={consumerStyles.det}>
      {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
      <Form.Control className={consumerStyles.plc} type="text" placeholder="company name"  value={companyToSearch}
          onChange={changedSearch}/>
      </Form.Group>
      
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
  );
};

export default SearchBar;
