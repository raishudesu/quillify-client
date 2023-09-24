import { Chip } from "@material-tailwind/react";

const TagsArea = ({
  tags,
  updateTags,
}: {
  tags: string[];
  updateTags: (newTags: string[]) => void;
}) => {
  const handleDeleteTag = (tagToDelete: string) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    updateTags(newTags); // Call the callback function to update tags in the parent
  };
  return (
    <div className="w-full flex gap-1 flex-wrap">
      {tags.map((tag, index) => (
        <a key={index} onClick={() => handleDeleteTag(tag)}>
          <Chip value={tag} variant="ghost" />
        </a>
      ))}
    </div>
  );
};

export default TagsArea;
