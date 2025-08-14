import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

type Props = {
  initialContent?: string;
  onChange?: (content: string) => void;
};

export default function MarkdownEditor({
  initialContent = "",
  onChange,
}: Props) {
  const [markdown, setMarkdown] = useState(initialContent);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <Textarea
      value={markdown}
      onChange={handleChange}
      placeholder="Write Markdown here... (Math uses $...$ / $$...$$)"
      className="text-white p-4 h-[50vh] font-light border-dashed border-gray-500"
      style={{ fontSize: "18px"}}
    />
  );
}
