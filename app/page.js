import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "",
  description: "Intellihack Project",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
