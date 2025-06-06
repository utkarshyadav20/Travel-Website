import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Clock, Briefcase, BookOpen, LayoutGrid } from 'lucide-react';
import { fetchDestinations, fetchTopSellingPackages } from './api';
import { DestinationCard } from './components/DestinationCard';
import { PackageCard } from './components/PackageCard';
import { LoadingCard } from './components/LoadingCard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TravelApp />
    </QueryClientProvider>
  );
}

function TravelApp() {
  const { data: destinations, isLoading: isLoadingDestinations } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations
  });

  const { data: tourPackages, isLoading: isLoadingPackages } = useQuery({
    queryKey: ['tourPackages'],
    queryFn: fetchTopSellingPackages
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Choose from our curated experiences, something for every traveler's taste
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold w-fit hover:bg-yellow-300 transition-colors">
            BOOK NOW
          </button>
          <div className="flex gap-8 mt-12">
            <span className="text-white">Easy Booking</span>
            <span className="text-white">Curated Destinations</span>
            <span className="text-white">Trusted Support</span>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-center"> 
          <h2 className="text-3xl font-bold mb-2 text-center text-cyan-600">
            Explore Most Popular Destinations
          </h2>
        </div>
        <div className="flex justify-center"> 
          <p className="text-gray-600 mb-8">Plan your per fect trip with our most loved and best-selling
            tour packages.</p>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoadingDestinations ? (
            Array(6).fill(null).map((_, index) => <LoadingCard key={index} />)
          ) : (
            destinations?.map((destination: any) => (
              <DestinationCard
                key={destination.name}
                name={destination.name}
                price={destination.price}
                image={destination.image}
              />
            ))
          )}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#7FD3D2] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Our Advantages</h2>
          <p className="text-center text-white ">You can rely on our experience and the quality of services we provide.</p>
          <p className="text-center text-white mb-12">Here are other reasons to book tours at Treat Holidays</p>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AdvantageCard
              icon={<Clock className="w-12 h-12" />}
              title="Save Time"
              description="No more switching for packages or plans."
            />
            <AdvantageCard
              icon={<Briefcase className="w-12 h-12" />}
              title="Save Money"
              description="Compare, negotiate, and choose the best."
            />
            <AdvantageCard
              icon={<LayoutGrid className="w-12 h-12" />}
              title="Trusted Network"
              description="A Trusted Network of 7000+ Travel Agents"
            />
            <AdvantageCard
              icon={<BookOpen className="w-12 h-12" />}
              title="Multiple Options"
              description="Itineraries & TTravel Tips from TTrusted Agents"
            />
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
         <div className="flex justify-center"> 
          <h2 className="text-3xl font-bold mb-2 text-center text-cyan-600">
            Top Selling Tour Packages of India
          </h2>
        </div>
        <div className="flex justify-center"> 
          <p className="text-gray-600 mb-8">Stay updated with our latest news and happenings through
Informe.</p>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoadingPackages ? (
            Array(6).fill(null).map((_, index) => <LoadingCard key={index} />)
          ) : (
            tourPackages?.map((pack: any) => (
              <PackageCard
                key={pack.name}
                name={pack.name}
                image={pack.image}
              />
            ))
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
      </div>
    </div>
  );
}

function AdvantageCard({ icon, title, description }:any) {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="bg-white rounded-full p-4 mb-4">
        <div className="text-[#7FD3D2]">{icon}</div>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York",
    text: "This text is used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "This text is used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    name: "Emma Wilson",
    location: "London",
    text: "This text is used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

export default App;