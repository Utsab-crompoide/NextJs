import TopSection from "./section/TopSection";
import SearchBar from "./section/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import NavBar from "./section/navBar/NavBar";

export default function Home() {
  return (
    <div
    style={{
      background: 'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
    }}
    >
      {/* Navbar */}
     <NavBar></NavBar>
      {/* Hero Section */}
     <TopSection></TopSection>

      {/* Search Bar */}
     <SearchBar></SearchBar>

      {/* Featured Job Listings */}
     <CategoryCard></CategoryCard>
    </div>
  );
}

