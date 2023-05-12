const Topbar = () => {
  return (
    <div className="px-[100px] py-4 flex justify-between items-center border-b border-solid border-slate-300">
      <h1 className="text-purple-700 font-semibold">
        E-commerce <span className="font-normal text-black">project</span>
      </h1>
      <p className="text-sm">
        Website created by{" "}
        <span className="font-semibold text-purple-700">Alyarzada</span>
      </p>
    </div>
  );
};

export default Topbar;
