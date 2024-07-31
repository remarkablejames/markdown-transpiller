import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Markdown Transpiler
        </h2>
        <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
          Under construction
        </p>
      </div>
    </main>
  );
}
