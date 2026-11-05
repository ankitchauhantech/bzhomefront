import { Section } from "@/components/section";

export const metadata = { title: "Wireframes | Bravo Zulu Homefront Alliance" };

const Box = ({ h = "h-6", w = "w-full", dark = false }: { h?: string; w?: string; dark?: boolean }) => (
  <div className={`${h} ${w} rounded-sm ${dark ? "bg-slate-400" : "bg-slate-200"}`} />
);

function DesktopWire() {
  return (
    <div className="w-full max-w-3xl rounded-lg border-2 border-slate-400 bg-white p-4 space-y-4">
      <div className="flex items-center justify-between"><Box w="w-40" dark /><div className="flex gap-3"><Box w="w-12" /><Box w="w-12" /><Box w="w-12" /><Box w="w-12" /></div></div>
      <div className="space-y-3 rounded bg-slate-100 p-8 text-center"><Box h="h-8" w="w-3/4" dark /><Box w="w-1/2" /><Box h="h-9" w="w-28" dark /></div>
      <div className="grid grid-cols-2 gap-4"><div className="space-y-2 rounded border p-4"><Box w="w-1/3" /><Box h="h-5" /><Box h="h-8" w="w-24" dark /></div><div className="space-y-2 rounded border p-4"><Box w="w-1/3" /><Box h="h-5" /><Box h="h-8" w="w-24" dark /></div></div>
      <div className="rounded bg-slate-100 p-4 space-y-2"><Box w="w-1/3" dark /><Box /><Box w="w-5/6" /></div>
      <div className="grid grid-cols-3 gap-4">{[0, 1, 2].map((i) => <div key={i} className="space-y-2 rounded border p-2"><div className="h-20 rounded bg-slate-300" /><Box /><Box w="w-2/3" /></div>)}</div>
      <div className="rounded bg-slate-500 p-4"><Box w="w-1/3" /></div>
      <p className="text-center text-xs text-slate-500">Desktop · 3-col events · 2-col motto/mission</p>
    </div>
  );
}

function MobileWire() {
  return (
    <div className="w-[280px] shrink-0 rounded-[2rem] border-4 border-slate-500 bg-white p-3 space-y-3">
      <div className="flex items-center justify-between"><Box w="w-24" dark /><div className="space-y-1"><Box h="h-1" w="w-5" dark /><Box h="h-1" w="w-5" dark /><Box h="h-1" w="w-5" dark /></div></div>
      <div className="space-y-2 rounded bg-slate-100 p-4 text-center"><Box h="h-6" dark /><Box h="h-6" w="w-3/4" dark /><Box h="h-8" w="w-24" dark /></div>
      <div className="space-y-2 rounded border p-3"><Box w="w-1/3" /><Box h="h-5" /><Box h="h-7" w="w-20" dark /></div>
      <div className="space-y-2 rounded border p-3"><Box w="w-1/3" /><Box h="h-5" /><Box h="h-7" w="w-20" dark /></div>
      <div className="space-y-2 rounded bg-slate-100 p-3"><Box w="w-1/2" dark /><Box /><Box /><Box w="w-2/3" /></div>
      {[0, 1].map((i) => <div key={i} className="space-y-2 rounded border p-2"><div className="h-24 rounded bg-slate-300" /><Box /><Box w="w-2/3" /></div>)}
      <div className="rounded bg-slate-500 p-3 space-y-1"><Box w="w-1/2" /><Box w="w-1/3" /></div>
      <p className="text-center text-xs text-slate-500">Mobile · stacked, hamburger nav</p>
    </div>
  );
}

export default function Wireframes() {
  return (
    <Section eyebrow="Prototype" title="Home page wireframes">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start">
        <DesktopWire />
        <MobileWire />
      </div>
    </Section>
  );
}
