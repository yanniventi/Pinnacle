import TextButton from "./components/ui/textbutton";

const Error = () => {
  return (
    <main className="flex h-dvh w-screen flex-col items-center justify-center gap-12">
      <h1 className="text-center font-serif text-6xl font-bold text-slate-900">
        Page Not Found!
      </h1>
      <p className="text-center text-2xl text-slate-700">
        It seems an error has occurred.
      </p>
      <TextButton to="/">Return home</TextButton>
    </main>
  );
};

export default Error;
