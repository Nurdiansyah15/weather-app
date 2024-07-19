function App() {
  return (
    <>
      <div
        id="container"
        className="w-full h-[100vh] flex flex-col items-center bg-slate-400"
      >
        <div
          id="header"
          className="w-full h-14 bg-slate-800 px-5 flex items-center"
        >
          <div id="logo">
            <h1 className="text-3xl font-bold text-white">Weather App</h1>
          </div>
        </div>
        <div id="content-box" className="w-1/2 h-full py-20 px-10 bg-slate-300">
          <div
            id="location"
            className="w-full h-fit py-5 bg-slate-800 flex justify-center items-center"
          >
            <h1 className="text-3xl font-bold text-white">Location</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
