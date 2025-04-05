import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/Shared/AdminSidebar';

interface Props {
  children: Readonly<React.ReactNode>;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className='w-full bg-[#f3f3f1]'>
        <div className='px-3'>
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default HomeLayout;
