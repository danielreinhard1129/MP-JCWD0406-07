'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../components/EventList';
import EventFilter from '../components/EventFilter';
import PrettyCarousel from '@/components/Carousel';

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filters, setFilters] = useState({ category: '', location: '' });

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    // Fetch events initially
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/events');
      if (response.data && Array.isArray(response.data.data)) {
        setEvents(response.data.data.reverse());
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const filteredEvents = events.filter((event) => {
    const categoryMatch =
      !filters.category || event.category.includes(filters.category);
    const locationMatch =
      !filters.location || event.location.includes(filters.location);
    return categoryMatch && locationMatch;
  });

  return (
    <div>
      <PrettyCarousel />
      <div>
        <div className="   ">
          <h2 className="text-3xl font-bold p-4">Browse event...</h2>
        </div>

        <EventFilter
          categories={['Music', 'Sports', 'Festival']}
          locations={['Jakarta', 'Bali', 'Batam']}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen flex flex-col"
        style={{ backgroundImage: `url('/aa.jpg')` }}
      >
        {/* Use filteredEvents here */}
        <EventList events={filteredEvents} />
      </div>
    </div>
  );
};

export default Home;
