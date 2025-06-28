import React, { useState } from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Upload,
  Loader,
} from "lucide-react";
import axios from "axios";
import "./styles.scss";


const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const MenuButton = ({
    onClick,
    isActive,
    disabled = false,
    children,
    icon: Icon,
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 rounded transition-all duration-200
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {Icon && <Icon size={16} className="inline-block mr-2" />}
      {children}
    </button>
  );

  return (
    <div className="control-group bg-white border-b p-4">
      <div className="button-group flex flex-wrap gap-2 items-center">
        {/* Text Formatting Buttons */}
        <div className="flex items-center gap-2">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            icon={Bold}
          >
            Bold
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            icon={Italic}
          >
            Italic
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            icon={Strikethrough}
          >
            Strikethrough
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
            icon={Code}
          >
            Code
          </MenuButton>
        </div>

        <div className="border-r h-6 mx-2"></div>

        {/* Heading Buttons */}
        <div className="flex items-center gap-2">
          <MenuButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            isActive={editor.isActive("paragraph")}
          >
            Paragraph
          </MenuButton>
          {[1, 2, 3].map((level) => (
            <MenuButton
              key={level}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level }).run()
              }
              isActive={editor.isActive("heading", { level })}
              icon={Heading}
            >
              H{level}
            </MenuButton>
          ))}
        </div>

        <div className="border-r h-6 mx-2"></div>

        {/* List and Quote Buttons */}
        <div className="flex items-center gap-2">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            icon={List}
          >
            Bullet List
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            icon={ListOrdered}
          >
            Ordered List
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive("blockquote")}
            icon={Quote}
          >
            Blockquote
          </MenuButton>
        </div>

        <div className="border-r h-6 mx-2"></div>

        {/* Undo/Redo Buttons */}
        <div className="flex items-center gap-2">
          <MenuButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            icon={Undo}
          >
            Undo
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            icon={Redo}
          >
            Redo
          </MenuButton>
        </div>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const BlogAdd = () => {
  const [title, setTitle] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [content, setContent] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Convert image file to base64 string
      setBannerImage(file); // Store the selected file
    }
  };
  

     const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary upload preset

    try {
      setIsUploading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dmvzjbgwp/image/upload`, // Replace with your cloud name
        formData
      );
      return response.data.secure_url;
    } catch (err) {
      throw new Error('Failed to upload image to Cloudinary',err);
    } finally {
      setIsUploading(false);
    }
  }; 

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError("");

      if (!title || !bannerImage || !content) {
        throw new Error("Please fill in all required fields");
      }

      // Upload image to Cloudinary
     const imageUrl = await uploadToCloudinary(bannerImage);

      // Submit blog post to backend
      const response = await axios.post(`${import.meta.env.VITE_BACKENDSERVER}/blog/uploadBlog`, {
        title,
        bannerImage:imageUrl ,
        content,
      },{withCredentials:true});

      // Handle successful submission
      // You might want to redirect to the blog list or show a success message
    } catch (err) {
      setError(err.message || "Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {error && (
          <div className="p-4 bg-red-50 text-red-500 border-l-4 border-red-500">
            {error}
          </div>
        )}

        <div className="p-6 border-b">
          <input
            type="text"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl font-bold outline-none border-b border-gray-200 pb-2 mb-4 focus:border-blue-500"
          />

<div className="mt-4">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Banner Image
  </label>
  <div className="flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
    {previewUrl ? (
      <div className="relative w-full">
        <img
          src={previewUrl}
          alt="Preview"
          className="max-h-64 mx-auto object-cover rounded"
        />
        <button
          onClick={() => {
            setBannerImage(null);
            setPreviewUrl("");
          }}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          Remove
        </button>
      </div>
    ) : (
      <div className="space-y-1 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
            <span>Upload a file</span>
            <input
              type="file"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    )}
  </div>
</div>

        </div>

        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={content}
          onUpdate={({ editor }) => {
            setContent(editor.getHTML());
          }}
          className="tiptap"
        />

        <div className="p-6 border-t bg-gray-50">
          <button
            onClick={handleSubmit}
            disabled={isUploading || isSubmitting}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isUploading || isSubmitting ? (
              <>
                <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                {isUploading ? "Uploading..." : "Publishing..."}
              </>
            ) : (
              "Publish Blog Post"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogAdd;
