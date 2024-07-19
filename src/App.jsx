import DayWeather from "./components/DayWeather";
import MainWeather from "./components/MainWeather";

function App() {
  return (
    <div className="container mx-auto py-8 max-w-screen-lg">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex flex-col justify-center px-4 py-16 gap-16">
          <MainWeather />
          <div className="flex gap-12 justify-center">
            <DayWeather />
            <DayWeather />
            <DayWeather />
            <DayWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
