import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header/>
      <MainContent/>
    </div>
  );
}