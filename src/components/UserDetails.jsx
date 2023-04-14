import React from "react";
import TabsContainer from "./TabsContainer";
import UserDetailsTabs from "./UserDetailsTabs";

const UserDetails = () => {
  return (
    <main id="userDetailsContainer">
      <UserDetailsTabs />
      <TabsContainer />
    </main>
  );
};

export default UserDetails;
