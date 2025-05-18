import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">Explore Listings</h1>
        <Card
          title="Cozy Apartment"
          description="Located in downtown with all amenities."
          image="/assets/placeholder.jpg"
        />
        <div className="mt-4">
          <Button label="Book Now" />
        </div>
      </main>
    </>
  );
}
