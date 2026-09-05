import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Products from "../common/Products";
import axios from "axios";
import { FaFilter, FaSortAmountDown, FaSearch, FaThList, FaThLarge, FaTimes } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const categories = [
  "All",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tops",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Layout view mode
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Synchronize category or search query from URL params if updated
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat.toLowerCase());
    const q = searchParams.get("search");
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Category Filter
    if (selectedCategory && selectedCategory !== "All" && selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Price Filter
    result = result.filter((p) => p.price <= maxPrice);

    // Rating Filter
    if (minRating > 0) {
      result = result.filter((p) => (p.rating || 0) >= minRating);
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, maxPrice, minRating, sortBy, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setMaxPrice(2000);
    setMinRating(0);
    setSortBy("default");
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="py-10 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Container>
        {/* Page Breadcrumb & Title */}
        <div className="mb-8 border-b border-gray-200 dark:border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Shop Catalog</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Explore our premium collection of products with exclusive deals
            </p>
          </div>
          <div className="text-xs font-semibold text-gray-400">
            Showing <span className="text-gray-900 dark:text-white font-bold">{filteredProducts.length}</span> items
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700/60 space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-700 pb-4">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                  <FaFilter className="text-sm text-emerald-500" /> Filters
                </h3>
                {(selectedCategory !== "All" || maxPrice < 2000 || minRating > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs font-semibold text-rose-500 hover:underline flex items-center gap-1"
                  >
                    <FaTimes /> Reset
                  </button>
                )}
              </div>

              {/* Category List */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Categories
                </h4>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors flex justify-between items-center ${
                        selectedCategory.toLowerCase() === cat.toLowerCase()
                          ? "bg-black dark:bg-white text-white dark:text-black font-bold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <span>{cat.replace("-", " ")}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Max Price
                  </h4>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="2000"
                  step="20"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black dark:accent-white cursor-pointer"
                />
              </div>

              {/* Minimum Rating */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Minimum Rating
                </h4>
                <div className="grid grid-cols-5 gap-1">
                  {[0, 3, 3.5, 4, 4.5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                        minRating === r
                          ? "bg-amber-500 border-amber-500 text-white"
                          : "border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {r === 0 ? "Any" : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Products Grid Section */}
          <main className="flex-1 space-y-6">
            
            {/* Controls Bar */}
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search within shop */}
              <div className="relative w-full sm:w-64">
                <FaSearch className="absolute left-3.5 top-3 text-gray-400 text-xs" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter products..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none"
                />
              </div>

              {/* Sorting & Layout View Toggle */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-2">
                  <FaSortAmountDown className="text-gray-400 text-xs" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
                  >
                    <option value="default">Sort by: Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="title">Alphabetical (A-Z)</option>
                  </select>
                </div>

                <div className="hidden md:flex items-center bg-gray-100 dark:bg-slate-900 p-1 rounded-xl">
                  <button
                    onClick={() => setGridCols(2)}
                    className={`p-1.5 rounded-lg text-xs transition-colors ${
                      gridCols === 2
                        ? "bg-white dark:bg-slate-800 text-black dark:text-white shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    <FaThList />
                  </button>
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 rounded-lg text-xs transition-colors ${
                      gridCols === 3
                        ? "bg-white dark:bg-slate-800 text-black dark:text-white shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    <FaThLarge />
                  </button>
                </div>
              </div>

            </div>

            {/* Products Listing */}
            {loading ? (
              <div className="py-24 text-center">
                <div className="inline-block w-8 h-8 border-4 border-black dark:border-white border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Loading shop items...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-gray-100 dark:border-slate-700/60">
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No Products Found</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your search criteria or price filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  gridCols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {filteredProducts.map((product) => (
                  <Products
                    key={product.id}
                    item={product}
                    productImg={product.thumbnail}
                    badgeT={product.discountPercentage > 12 ? `${Math.round(product.discountPercentage)}% OFF` : "NEW"}
                    productT={product.title}
                    price={product.price}
                    category={product.category}
                    rating={product.rating}
                  />
                ))}
              </div>
            )}

          </main>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
