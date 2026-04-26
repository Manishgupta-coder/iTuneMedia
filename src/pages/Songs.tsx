import PageLayout from '../components/PageLayout';

const songs = [
  { title: "Top Hits 2026", description: "The most popular songs right now." },
  { title: "Chill Vibes", description: "Relaxing tunes for your evening." },
  { title: "Workout Mix", description: "High energy tracks to keep you moving." },
  { title: "Acoustic Covers", description: "Beautiful acoustic renditions of pop songs." },
  { title: "Electronic Dance", description: "Get the party started with EDM." },
  { title: "Classic Rock", description: "The best rock anthems of all time." },
];

export default function Songs() {
  return <PageLayout title="Songs" items={songs} />;
}
