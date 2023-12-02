import vite from "/vite.svg";
const App = () => {
  return (
    <div className="min-h-screen grid place-content-center">
      <h1 className="text-5xl text-primary-500 font-bold">
        Hello | ASU Smart Campus
        <img src={vite} alt="" width={200} className="mx-auto" />
      </h1>
    </div>
  );
};

export default App;
