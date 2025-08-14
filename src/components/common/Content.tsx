import { useState } from "react";
import Container from "@/utils/Container";
import MarkdownEditor from "@/components/common/MarkdownEditor";
import MarkdownMathRenderer from "@/components/common/MarkdownMathRenderer";

export default function Content() {
  const [content, setContent] = useState<string>("");

  return (
    <Container>
      <div className="space-y-3 mt-3">
        {/* Editor */}
        <div className="rounded overflow-hidden">
          <MarkdownEditor value={content} onChange={setContent} />
        </div>

        {/* Preview */}
        {content && (
          <div className="flex-1 border rounded overflow-auto bg-gray-50 p-2">
            <h2 className="font-semibold mb-2">Preview</h2>
            <MarkdownMathRenderer markdown={content} />
          </div>
        )}
      </div>
    </Container>
  );
}
