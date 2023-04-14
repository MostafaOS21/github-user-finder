import "./_main.scss";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import APIContext from "./context/ContextAPI";
import ErrorSearch from "./components/ErrorSearch";
import UserDetails from "./components/UserDetails";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [scrollNav, setScrollNav] = useState(false);

  let elements;

  if(!isLoading) {
    if(data.length > 0) {
      elements = (
        <main className="main__github">
          
          <Profile text={{
            name: data[0].name,
            username: data[0].login,
            social_link: `${searchResult}/social_accounts`,
            followers: data[0].followers,
            following: data[0].following,
            bio: data[0].bio,
            twitter_username: data[0].twitter_username,
            blog: data[0].blog,
            location: data[0].location,
            repos: data[0].public_repos
          }} />
  
          <UserDetails />
        </main>
      );
    } else {
      if(error) {
        elements = <ErrorSearch error={error} />
      } else {
        elements = <ErrorSearch />
      }
    }
  } else {
    elements = <main id="data__loading">
      <aside className="profile__load">
        <div className="avatar"></div>

        <h3 className="name__load"></h3>

        <p className="bio__load">
          <span className="line__1"></span>
          <span className="line__2"></span>
          <span className="line__3"></span>
        </p>
      </aside>
    </main>
  }

  // Set Navbar
  
  useEffect(() => {
    const setNavActive = (event) => {
      const scrollY = event.currentTarget.scrollY;
      
      if(scrollY <= 150) {
        setScrollNav(false);
      } else {
        setScrollNav(true);
      }
    }

    window.addEventListener("scroll", setNavActive);

    return () => {
      window.removeEventListener("scroll", setNavActive);
    }
  }, [window.scrollY])

  return (
    <div className="App">
      <APIContext.Provider
        value={{ isLoading, setIsLoading, error, 
          setError, data, setData,
          searchResult, setSearchResult }}
      >
        <QueryClientProvider client={queryClient}>
          <Header scrollNav={scrollNav} />
          {elements}
        </QueryClientProvider>
      </APIContext.Provider>
    </div>
  );
}

export default App;
