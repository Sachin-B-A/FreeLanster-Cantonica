import React from 'react';
import Cards from './Cards'; // Import the Cards component
import Cdata from './Cdata'; // Import the job data
import styled from 'styled-components';
import Hero from './Hero';

const FFHeroImg = 'url("https://ik.imagekit.io/unimzwtxr/backgorund1.webp?updatedAt=1727771624680")';

const JobList = () => {
  return (
    <>
      <Hero
        title="Find Your Dream Job!"
        desc="Browse through a wide range of job opportunities."
        img={FFHeroImg}
        placeholder="Search Jobs"
      />

      <CardsHolder>
        {Cdata.map((job) => (
          <Cards
            key={job.id} // Use a unique key for each card
            id={job.id}
            imgScr={job.imgScr}
            title={job.title}
            date={job.date}
            content={job.content}
          />
        ))}
      </CardsHolder>
    </>
  );
};

const CardsHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px; /* Space between job cards */
`;

export default JobList;
