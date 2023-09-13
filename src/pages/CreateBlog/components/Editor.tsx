import { FormEvent } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
import { useBlogs } from "../../../stores/useBlogs";
import { useAuth } from "../../../stores/useAuth";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

const Editor = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const { createPost } = useBlogs();
  const { currentUser } = useAuth();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      createPost(
        title,
        summary,
        content,
        currentUser?.username as string,
        (currentUser?.userId as string) || (currentUser?.id as string),
        currentUser?.token as string
      );
    } catch (error) {
      console.log(error);
    }
  };

  const formats = [
    "align",
    "background",
    "blockquote",
    "bold",
    "code-block",
    "color",
    "float",
    "font",
    "header",
    "height",
    "image",
    "italic",
    "link",
    "script",
    "strike",
    "size",
    "underline",
    "width",
  ];
  const modules = {
    imageActions: {},
    imageFormats: {},
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  };

  return (
    <div className="flex flex-col gap-4 md:min-w-[500px] w-full max-h-content items-center ">
      <div className="text-2xl font-bold">Create blog</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full items-center max-w-screen-2xl "
      >
        <Input
          size="lg"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
        <Textarea
          size="lg"
          label="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full"
        />
        <div>Content</div>
        <ReactQuill
          formats={formats}
          modules={modules}
          value={content}
          onChange={setContent}
          theme="snow"
          style={{ width: "100%" }}
        />
        <Button className="min-w-[20%]" type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default Editor;
