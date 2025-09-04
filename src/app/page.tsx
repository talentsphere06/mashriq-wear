import Hero from '@/app/components/Hero'
import ProductsCom from './components/productsCom';
export default function Home() {
  return (
    <div className=" " >
      <Hero/>
      <hr className='m-1 bg-black '/>
      <ProductsCom/>
    </div>
  );
}
