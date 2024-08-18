import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Heading from "./Heading";

export default function Testimonials() {
  return (<>
    
    <div className="h-[40rem] rounded-md mt-24 mb-20 lg:mt-40 flex flex-col md:flex md:flex-col  justify-center relative overflow-hidden">
      <div className="block md:hidden">
        <Heading words={["What","people","say"]} index={1} />
        <Heading words={["about","us"]} index={3}/>
      </div>
      <div className="hidden md:block">
        <Heading words={["What","people","say","about","us"]} index={1} />
      </div>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-5 md:mt-10"
      />
    </div>
    </>
  );
}

const testimonials = [
  {
    quote: "The training at InsightBlend was a game-changer for our team. The hands-on approach and industry-specific focus made the learning experience both engaging and directly applicable to our work.",
    name: "Corporate Executive",
    title: "A Tale of Two Cities",
  },
  {
    quote:"InsightBlend's workshop transformed how we integrate data analytics into our curriculum. The personalized attention and expert knowledge of their trainers were truly exceptional.",
    name: "University Professor",
    title: "Hamlet",
  },
  {
    quote: "Partnering with InsightBlend has elevated our academic offerings. Their bespoke training modules have been instrumental in enhancing our students' practical skills in data analytics.",
    name: "University Representative",
    title: "A Dream Within a Dream",
  },
  {
    quote:"InsightBlend's tailored training programs have significantly improved our team's productivity and data analysis capabilities. Their approach to learning is both innovative and highly effective.",
    name: "Corporate Organization",
    title: "Pride and Prejudice",
  },
  {
    quote:"InsightBlend's training gave me a competitive edge in the job market. The real-world case studies and the Microsoft certification have opened new career opportunities for me.",
    name: "Recent Graduate",
    title: "Moby-Dick",
  },
];
