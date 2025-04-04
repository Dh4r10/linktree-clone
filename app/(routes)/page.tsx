import { Button } from '@/components/ui/button';
import Navbar from './components/Navbar';
import Logo from '@/components/Shared/Logo';

export default function Home() {
  return (
    <div>
      <Logo />
      <Button className='font-normal'>Hello world</Button>
      <Navbar />
    </div>
  );
}
