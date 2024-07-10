import React from 'react';
import CodingHours from '../components/coding-hours';

export default function Activity() {
  return (
    <section className="w-full pt-10">
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          Recent Activities
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <CodingHours />
          {/* <Spotify /> */}
        </div>
      </div>
    </section>
  );
}
