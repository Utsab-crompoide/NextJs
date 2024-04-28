import TopSection from "./section/TopSection";
import SearchBar from "./section/SearchBar";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <div
    style={{
      background: 'linear-gradient(to right, #009245, #FCEE21)',
    }}
    >
      {/* Hero Section */}
     <TopSection></TopSection>

      {/* Search Bar */}
     <SearchBar></SearchBar>

      {/* Featured Job Listings */}
     <CategoryCard></CategoryCard>
    </div>
  );
}

