import ServiceCard from "../components/ServiceCard";
import img1 from "../assets/images/livingroom.jpg";
import img2 from "../assets/images/homepage-background.jpg";
import img3 from "../assets/images/modern-luxury-living-room-interior.jpg";
import img4 from "../assets/images/minh-pham-Y6HuHkhrKYU-unsplash.jpg";

function Services() {
  return (  
    <div className='flex p-4 justify-center bg-white'>
      <ServiceCard img={img1} />
      <ServiceCard img={img2} />
      <ServiceCard img={img3} />
      <ServiceCard img={img4} />
    </div>
  );
}

export default Services;
