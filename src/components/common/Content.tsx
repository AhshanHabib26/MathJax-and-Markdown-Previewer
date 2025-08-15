import { useState } from "react";
import Container from "@/utils/Container";
import MarkdownEditor from "@/components/common/MarkdownEditor";
import MarkdownMathRenderer from "@/components/common/MarkdownMathRenderer";

export default function Content() {
  const [content, setContent] = useState<string>("");

  return (
    <Container>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="rounded overflow-hidden">
            <MarkdownEditor
              value={content}
              onChange={setContent}
            />
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
