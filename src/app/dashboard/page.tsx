"use client";

import { useState } from "react";
import { SearchDashboard } from "./_components/search-dashboard";
import { TemplateList } from "./_components/template-list";

/*
It will have a SEARCH bar 
template list 

*/
const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();
  //console.log("Search input", searchInput);

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput as string} />
    </div>
  );
};

export default Dashboard;
