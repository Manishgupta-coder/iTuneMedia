import PageLayout from '../components/PageLayout';

const movies = [
  { title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology." },
  { title: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham." },
  { title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality." },
  { title: "Avengers: Endgame", description: "After the devastating events of Infinity War, the universe is in ruins." },
  { title: "Spider-Man", description: "Teen Miles Morales becomes the Spider-Man of his universe." },
];

export default function Movies() {
  return <PageLayout title="Movies" items={movies} />;
}
