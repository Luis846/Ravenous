const apiKey = 'TGIhLM1-VGM9sb2reqUKtJJ7aPIPoJ2G7-iiR3Kp81F3yqKtD4FAS7G_v1zaOEYxAOJB1djUZYErD4BzLlGOgvrPojknqO1_SVHy7UfQg5Q10XMn6R6deYNzew0MXHYx';

const Yelp ={

searchYelp(term, location, sortBy){
return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
}).then((response) =>{
    return response.json();
}).then((jsonResponse) =>{
    if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business) =>{
            console.log(business);
           return  {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
            };
        });
      }
    })
   }
};
export default Yelp;