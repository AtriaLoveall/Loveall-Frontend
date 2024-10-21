import React, { useEffect, useState } from 'react';

export default function LoveAllRecommendedBrands(props) {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        console.log('Fetching brands data...');
        const response = await fetch('http://localhost:5000/api/stores');
        if (!response.ok) {
          throw new Error('Failed to fetch stores');
        }
        const data = await response.json();
        console.log('Brands data fetched successfully:', data);
        setBrands(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
        setError(error.message || 'An unknown error occurred');
      }
    };

    fetchBrands();
  }, []);
  // console.log(props)
  // setBrands(props.brand);
  // setError(props.error);
  // useEffect(() => {
  //   console.log(brands)

  // }, [brands])

  const handleImageError = (e, brandName) => {
    console.error(`Error loading image for ${brandName}`);
    e.target.src = '/placeholder.svg';
  };

  const getImageUrl = (imagePath) => {
    // Assuming your images are in a folder named 'images' in your XAMPP htdocs directory
    return `http://localhost/images/${imagePath}`;
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">LoveAll Recommended Brands</h2>
      {brands.length === 0 ? (
        <p className="text-gray-500">Loading brands...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div key={brand.store_id} className="flex flex-col items-center">
              <div className="w-24 h-24 relative mb-2 rounded-lg overflow-hidden">
                <img
                  src={brand.store_logo ? getImageUrl(brand.store_logo) : '/placeholder.svg'}
                  alt={brand.store_name}
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, brand.store_name)}
                />
              </div>
              <span className="text-sm text-center font-medium">{brand.store_name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}