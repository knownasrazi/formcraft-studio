import { useState } from "react";
type Field={id:string;label:string;type:"text"|"email"|"select";};
export default function App(){
  const [fields,setFields]=useState<Field[]>([{id:"1",label:"Name",type:"text"}]);
  const [selected,setSelected]=useState<string>("1");
  function addField(){ const id=crypto.randomUUID(); setFields([...fields,{id,label:"New field",type:"text"}]); setSelected(id); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex gap-6">
        <div className="w-64">
          <h1 className="font-light">formcraft-studio</h1>
          <button onClick={addField} className="mt-4 w-full rounded-xl bg-[#1a1a1a] py-2 text-sm text-white">Add field</button>
          <div className="mt-4 space-y-2">
            {fields.map(f=>(
              <div key={f.id} onClick={()=>setSelected(f.id)} className={"rounded-xl border p-3 text-sm cursor-pointer "+(selected===f.id?"bg-white border-[#1a1a1a]":"bg-white border-[#ebe7e0]")}>{f.label}</div>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-2xl border border-[#ebe7e0] bg-white p-6">
          <h3 className="font-medium">Preview</h3>
          <form className="mt-4 space-y-3">
            {fields.map(f=>(
              <div key={f.id}>
                <label className="text-sm">{f.label}</label>
                <input placeholder={f.label} className="mt-1 w-full rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
              </div>
            ))}
          </form>
          <pre className="mt-4 rounded-xl bg-[#fdfcfa] p-3 text-xs overflow-auto">{JSON.stringify(fields,null,2)}</pre>
        </div>
      </div>
    </main>
  );
}
