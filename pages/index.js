import Head from "next/head";
import UiList from "../components/data/UiList";

export default function Home() {
  return (
    <>
      <Head>
        <title>React UI Components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen space-y-6 bg-slate-50 p-4 text-slate-800 sm:p-6">
        {UiList.map((ui) => (
          <div key={ui.id} className="space-y-6">
            <h3 className="text-3xl font-semibold">{ui.label}</h3>
            <div>{ui.component}</div>
          </div>
        ))}
      </main>
    </>
  );
}
