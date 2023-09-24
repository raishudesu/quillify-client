import { FormEvent } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
import { useBlogs } from "../../../stores/useBlogs";
import { useAuth } from "../../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import TagsArea from "./TagsArea";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

const Editor = () => {
  const navigate = useNavigate();
  const { editPost, viewBlog } = useBlogs();
  const [title, setTitle] = useState(viewBlog?.title);
  const [summary, setSummary] = useState(viewBlog?.summary);
  const [content, setContent] = useState(viewBlog?.content);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>(viewBlog?.tags as string[]);

  const { currentUser } = useAuth();
  const postData = {
    userId: currentUser?.id,
    postId: viewBlog?._id,
    token: currentUser?.token,
    body: {
      title,
      summary,
      content,
      tags,
    },
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      editPost(postData);
      navigate("/profile");
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
  const handleAddTag = () => {
    if (!tags.includes(tag) && tag.trim() !== "") {
      setTags([...tags, tag.trim()]); // Add the trimmed tag (remove leading/trailing spaces)
    }
    setTag("");
  };

  const updateTags = (newTags: string[]) => {
    setTags(newTags);
  };
  return (
    <div className="flex flex-col gap-4 md:min-w-[500px] w-full max-h-content items-center ">
      <div className="text-2xl font-bold">Edit blog</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full items-center max-w-screen-2xl"
      >
        <Input
          size="lg"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
        <div className="w-full flex gap-2">
          <Input
            size="lg"
            label="Add tags"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full"
          />
          <Button variant="text" color="purple" onClick={handleAddTag}>
            Add
          </Button>
        </div>
        <TagsArea tags={tags} updateTags={updateTags} />
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
          value={content as string}
          onChange={setContent}
          theme="snow"
          className="w-full max-w-screen-2xl break-all"
        />
        <Button className="min-w-[20%] mt-10" color="purple" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Editor;
