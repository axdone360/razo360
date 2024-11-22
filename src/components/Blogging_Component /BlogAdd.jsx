import React from 'react'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
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
  Redo 
} from 'lucide-react'
import './styles.scss';


const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const MenuButton = ({ 
    onClick, 
    isActive, 
    disabled = false, 
    children, 
    icon: Icon 
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 rounded transition-all duration-200
        ${isActive 
          ? 'bg-blue-500 text-white' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {Icon && <Icon size={16} className="inline-block mr-2" />}
      {children}
    </button>
  )

  return (
    <div className="control-group bg-white border-b p-4">
      <div className="  button-group flex flex-wrap gap-2 items-center">
        <MenuButton 
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          icon={Bold}
        >
          Bold
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          icon={Italic}
        >
          Italic
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          icon={Strikethrough}
        >
          Strikethrough
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          icon={Code}
        >
          Code
        </MenuButton>

        <div className="border-r h-6 mx-2"></div>

        <MenuButton 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          icon={Heading}
        >
          H1
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          icon={Heading}
        >
          H2
        </MenuButton>

        <div className="border-r h-6 mx-2"></div>

        <MenuButton 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          icon={List}
        >
          Bullet List
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          icon={ListOrdered}
        >
          Ordered List
        </MenuButton>
        
        <MenuButton 
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          icon={Quote}
        >
          Blockquote
        </MenuButton>

        <div className="border-r h-6 mx-2"></div>

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
  )
}

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
]

const content = `
<h2>
  Welcome to Your Blog Editor
</h2>
<p>
  Start writing your amazing content here...
</p>
`

const BlogAdd = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl  h-screen  p-10 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        
        <EditorProvider 
          slotBefore={<MenuBar />} 
          extensions={extensions} 
          content={content}
          className="tiptap "
        />
      </div>
    </div>
  )
}

export default BlogAdd