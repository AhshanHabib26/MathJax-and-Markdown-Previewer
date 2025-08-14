import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import MathToolbar from "./MathToolbar";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function MarkdownEditor({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInsert = (symbol: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = value.substring(0, start) + symbol + value.substring(end);
    onChange(newValue);

    const cursorPos = start + symbol.length;
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = cursorPos;
      textarea.focus();
    }, 0);
  };

  return (
    <div>
      <MathToolbar onInsert={handleInsert} />
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write Markdown here... (Math uses $...$ / $$...$$)"
        className="text-white p-4 h-[40vh] font-light border-dashed border-gray-500"
        style={{ fontSize: "18px" }}
      />
    </div>
  );
}
