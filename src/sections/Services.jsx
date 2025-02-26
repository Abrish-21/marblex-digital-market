import ServiceCard from "../components/ServiceCard";

function Services() {
  return (  
    <div className='lg:flex lg:p-4 lg:justify-center grid grid-cols-[10rem_10rem] gap-6 lg:ml-0 ml-6 bg-white'>
      <ServiceCard img="https://i.postimg.cc/qvVGwVkz/livingroom.jpg" />
      <ServiceCard img="https://i.postimg.cc/MGZ302D1/homepage-background.jpg" />
      <ServiceCard img="https://i.postimg.cc/nLRxB1vc/modern-luxury-living-room-interior.jpg" />
      <ServiceCard img="https://i.postimg.cc/MTT4w2fz/minh-pham-Y6-Hu-Hkhr-KYU-unsplash.jpg" />
    </div>
  );
}

export default Services;
