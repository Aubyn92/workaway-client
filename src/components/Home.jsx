import React from 'react';
// import desktopImage from '../assets/images/travel2-desktop.jpg';
// import mobileImage from '../assets/images/travel2-mobile.jpg';
// import render from 'react-dom';

const Home = () => {
//     const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

//     return (
//         <div className="Home" style={{backgroundImage: `url(${imageUrl})` }}>
//             <div className="Home-content">
//                 <h1>Workaway</h1>
//                 <p>Travel, Volunteer, Connect</p>
//             </div>
//         </div>
//     );
// };

// const useWindowWidth = () => {
//     const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleWindowResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleWindowResize);
//         return () => window.removeEventListener('resize', handleWindowResize);
//     },[]);

//     return windowWidth;
// };
return(
    <h1> hello world </h1>
)







//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

//     useEffect(() => {
//         const handleWindowResize = () => {
//             setWindowWidth(window.innerWidth);
//         };
        
//         window.addEventListener('resize', handleWindowResize);

//         return () => {
//             window.removeEventListener('resize', handleWindowResize);
//         }
//     }, []);
    
//     return (
//         <div className="Home" style={{backgroundImage: `url(${imageUrl})` }}>
//             <div className="Home-content">
//                 <h1>Pineapples</h1>
//                 <p>They are good</p>
//             </div>
//         </div>
//     );
// };

}

export default Home;