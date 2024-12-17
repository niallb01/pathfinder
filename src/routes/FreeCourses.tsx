// import { useState } from "react";

// const FreeCourses = () => {
//   // State for user input
//   const [location, setLocation] = useState("");
//   const [deliveryType, setDeliveryType] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const categories = [
//     "Accounting and Finance",
//     "Agriculture",
//     "Building and Construction",
//     "Business Management",
//     "Childcare and Early Years",
//     "Digital",
//     "Engineering",
//     "Environmental Conservation",
//     "Health and Social Care",
//     "Horticulture and Forestry",
//     "Hospitality and Catering",
//     "Manufacturing Technologies",
//     "Mathematics and Statistics",
//     "Medicine and Dentistry",
//     "Public Services",
//     "Science",
//     "Teaching and Lecturing",
//     "Transportation Operations and Maintenance",
//     "Warehousing and Distribution",
//   ];

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Search Criteria:");
//     console.log("Location:", location);
//     console.log("Delivery Type:", deliveryType);
//     console.log("Selected Categories:", selectedCategories);
//   };

//   return (
//     <div>
//       <h1>Free Courses</h1>
//       <p>Find free courses available in your local area or online.</p>

//       <form onSubmit={handleSubmit}>
//         {/* Location Input */}
//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={(e) =>
//               setLocation(e.target.value, console.log(e.target.value))
//             }
//             placeholder="Enter your city or postcode"
//           />
//         </div>

//         {/* Delivery Type Options */}
//         <div>
//           <label>Delivery Type:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="deliveryType"
//                 value="in-person"
//                 checked={deliveryType === "in-person"}
//                 onChange={(e) => setDeliveryType(e.target.value)}
//               />
//               In-person
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="deliveryType"
//                 value="remote"
//                 checked={deliveryType === "remote"}
//                 onChange={(e) => setDeliveryType(e.target.value)}
//               />
//               Remote
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="deliveryType"
//                 value="hybrid"
//                 checked={deliveryType === "hybrid"}
//                 onChange={(e) => setDeliveryType(e.target.value)}
//               />
//               Hybrid
//             </label>
//           </div>
//         </div>

//         {/* Category Checkboxes */}
//         <div>
//           <h3>Course Categories</h3>
//           {categories.map((category) => (
//             <label key={category}>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() =>
//                   handleCategoryChange(category, console.log(category))
//                 }
//               />
//               {category}
//             </label>
//           ))}
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Find Courses</button>
//       </form>
//     </div>
//   );
// };

// export default FreeCourses;
