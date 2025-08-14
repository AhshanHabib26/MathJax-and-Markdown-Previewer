import { useState } from "react";
import { MATH_SYMBOLS } from "./MathSymbols";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type ToolbarProps = {
  onInsert: (symbol: string) => void;
};

export default function MathToolbar({ onInsert }: ToolbarProps) {
  const [search, setSearch] = useState("");

  const filteredSymbols = MATH_SYMBOLS.filter(
    (sym) =>
      sym.label.toLowerCase().includes(search.toLowerCase()) ||
      sym.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-3">
      <div className="flex items-end justify-end">
        <Input
          type="text"
          placeholder="Search symbols..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3 p-2 w-xs border rounded bg-gray-800 text-white border-dashed border-gray-500"
        />
      </div>
      <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
        {filteredSymbols.map((sym) => (
          <Button
            key={sym.value}
            type="button"
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
            onClick={() => onInsert(sym.value)}
          >
            {sym.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
