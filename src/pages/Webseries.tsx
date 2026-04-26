import PageLayout from '../components/PageLayout';

const webseries = [
  { title: "Stranger Things", description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces." },
  { title: "Breaking Bad", description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine." },
  { title: "The Boys", description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers." },
  { title: "Money Heist", description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history." },
  { title: "Squid Game", description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games." },
  { title: "Dark", description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families." },
];

export default function Webseries() {
  return <PageLayout title="Web Series" items={webseries} />;
}
