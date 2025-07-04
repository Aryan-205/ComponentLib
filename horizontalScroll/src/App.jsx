import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white ">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/braindamage.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/computerLickMeme.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/gofuckyourselfmeme.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/aachalaude.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/wedontcarememe.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/luffy.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/zoroMeme.jpeg",
    title: "Title 7",
    id: 7,
  },
];


export default function App() {
  return (
    <>
      <div className="bg-neutral-800">
        <div className="flex h-96 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel />
        <div className="flex h-96 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    </>
  )
}