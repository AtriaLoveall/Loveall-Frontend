const fetchHomeData = async () => {
    const homeApi = `${process.env.REACT_APP_API_URL}/user/home`;
    let homeBrand = [], offers = [], featuredOffers = [];
  
    try {
      const response = await fetch(homeApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        
        if (result.succes) {
          // Extract data for homeBrand, offers, and featuredOffers
          homeBrand = result.data.brand.map(store => ({
            storeId: store.store_id,
            storeName: store.store_name,
            category: store.category,
            rating: store.rating,
            address: store.address,
          }));
  
          offers = result.data.offers.map(offer => ({
            offerId: offer.offer_id,
            storeId: offer.store_id,
            offerType: offer.offer_type,
            description: offer.description,
            discountPercentage: offer.discount_percentage,
            minimumPurchase: offer.minimum_purchase,
            maximumDiscount: offer.maximum_discount,
            startDate: offer.start_date,
            endDate: offer.end_date,
            terms: offer.terms_conditions,
            featured: offer.featured,
          }));
  
          featuredOffers = result.data.featureOffers.map(offer => ({
            offerId: offer.offer_id,
            storeId: offer.store_id,
            offerType: offer.offer_type,
            description: offer.description,
            discountPercentage: offer.discount_percentage,
            minimumPurchase: offer.minimum_purchase,
            maximumDiscount: offer.maximum_discount,
            startDate: offer.start_date,
            endDate: offer.end_date,
            terms: offer.terms_conditions,
          }));
        }
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  
    return {
      homeBrand,
      offers,
      featuredOffers,
    };
  };
  