import { useState } from "react";
import { MATH_SYMBOLS } from "./MathSymbols";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type ToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (newValue: string) => void;
  onUndo: () => void;
  onRedo: () => void;
};

export default function MathToolbar({
  textareaRef,
  value,
  onChange,
  onUndo,
  onRedo,
}: ToolbarProps) {
  const [search, setSearch] = useState("");

  const filteredSymbols = MATH_SYMBOLS.filter(
    (sym) =>
      sym.label.toLowerCase().includes(search.toLowerCase()) ||
      sym.value.toLowerCase().includes(search.toLowerCase())
  );

  function insertAtCursor(text: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;

    // Insert symbol
    const newValue = value.substring(0, start) + text + value.substring(end);
    onChange(newValue);

    // Default cursor position → after inserted text
    let cursorPos = start + text.length;

    // {} → inside first {}
    const braceIndex = text.indexOf("{}");
    if (braceIndex !== -1) {
      cursorPos = start + braceIndex + 1;
    }
    // "$  $" → between spaces
    else if (text.includes("$  $")) {
      cursorPos = start + text.indexOf(" ") + 1;
    }
    // "$$\n\n$$" → inside empty line
    else if (text.includes("$$\n\n$$")) {
      cursorPos = start + text.indexOf("\n") + 1;
    }

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = cursorPos;
      textarea.focus();
    }, 0);
  }

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <Input
          type="text"
          placeholder="Search symbols..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-xs border rounded bg-gray-800 text-white border-dashed border-gray-500"
        />
        <div className="flex gap-2">
          <Button
            onClick={onUndo}
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Undo
          </Button>
          <Button
            onClick={onRedo}
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Redo
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar">
        {filteredSymbols.map((sym) => (
          <Button
            key={sym.value}
            type="button"
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
            onClick={() => insertAtCursor(sym.value)}
          >
            {sym.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
