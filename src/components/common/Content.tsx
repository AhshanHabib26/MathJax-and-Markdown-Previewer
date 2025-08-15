import { useState, useEffect, useRef } from "react";
import Container from "@/utils/Container";
import MarkdownEditor from "@/components/common/MarkdownEditor";
import MarkdownMathRenderer from "@/components/common/MarkdownMathRenderer";

export default function Content() {
  const [content, setContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const savedContent = localStorage.getItem("userContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("userContent", content);
    }, 500);
    return () => clearTimeout(timer);
  }, [content]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!editorRef.current) return;
      const isFocused = editorRef.current.contains(document.activeElement);
      if (!isFocused) return;

      if (e.key === "Backspace" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setContent("");
        localStorage.removeItem("userContent");
        return;
      }
      if (e.key === "Backspace" && content === "") {
        localStorage.removeItem("userContent");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [content]);

  return (
    <Container>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="rounded overflow-hidden" ref={editorRef}>
            <MarkdownEditor value={content} onChange={setContent} />
          </div>

          {/* Preview */}
          <div className="rounded border bg-gray-50 p-4 overflow-hidden">
            <h2 className="font-semibold mb-2">Preview</h2>
            <MarkdownMathRenderer markdown={content} />
          </div>
        </div>
      </div>
    </Container>
  );
}
