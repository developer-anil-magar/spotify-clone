import Header from '@/components/Header';
import ListItem from '@/components/ListItem';

export default function Home() {
  return (
    <div className="size-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 text-white">
      <Header>
        <h1 className="text-3xl font-semibold text-white">Welcome Back</h1>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <ListItem name="Liked Songs" image="/images/liked.png" href="liked" />
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest songs</h1>
        </div>
        list of songs coming!!
      </div>
    </div>
  );
}
