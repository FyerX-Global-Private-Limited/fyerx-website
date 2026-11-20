"use client";

import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import { Node as TiptapNode } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { NodeSelection } from "@tiptap/pm/state";
import { Bold, CornerUpLeft, ImagePlus, Italic, Link2, List, ListOrdered, Quote, Redo2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { safeLink, type Media, type Node } from "@/lib/editorial/document";
import styles from "./workspace.module.css";

const inlineImage = TiptapNode.create({
  name: "inlineImage",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,
  addAttributes() {
    return { src: { default: "" }, alt: { default: "" }, caption: { default: "" } };
  },
  renderHTML({ node }) {
    return [
      "figure",
      {},
      ["img", { src: node.attrs.src, alt: node.attrs.alt, draggable: "false" }],
      ...(node.attrs.caption ? [["figcaption", {}, node.attrs.caption]] : []),
    ];
  },
});

export type ImageRequest = {
  media?: Media;
  file?: File;
  apply: (image: Media) => void;
  allowCaption?: boolean;
  label: string;
};

function imageAction(editor: Editor, open: (request: ImageRequest) => void, file?: File) {
  const selection = editor.state.selection;
  const selectedImage = !file && selection instanceof NodeSelection && selection.node.type.name === "inlineImage";
  open({
    label: selectedImage ? "Edit inline image" : "Insert inline image", file, allowCaption: true,
    media: selectedImage ? selection.node.attrs as Media : undefined,
    apply(image) {
      if (selectedImage) editor.chain().focus().setNodeSelection(selection.from).updateAttributes("inlineImage", image).run();
      else editor.chain().focus().insertContentAt({ from: selection.from, to: selection.to }, { type: "inlineImage", attrs: image }).run();
    },
  });
}

export function RichEditor({ body, onChange, onImage }: {
  body: Node; onChange: (body: Node) => void; onImage: (request: ImageRequest) => void;
}) {
  const handlers = useRef({ onChange, onImage });
  const instance = useRef<Editor | null>(null);
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] }, link: { openOnClick: false, defaultProtocol: "https" },
        strike: false, code: false, codeBlock: false, horizontalRule: false, underline: false,
      }),
      inlineImage,
    ],
    content: body,
    editorProps: {
      attributes: { "aria-label": "Article body", role: "textbox", "aria-multiline": "true", "data-testid": "article-body" },
      handleDOMEvents: {
        paste(_view, event) {
          const file = event.clipboardData?.files[0];
          const current = instance.current;
          if (!file || !current) return false;
          event.preventDefault();
          imageAction(current, handlers.current.onImage, file);
          return true;
        },
        drop(view, event) {
          const file = event.dataTransfer?.files[0];
          const current = instance.current;
          if (!file || !current) return false;
          event.preventDefault();
          const target = view.posAtCoords({ left: event.clientX, top: event.clientY });
          if (target) current.commands.setTextSelection(target.pos);
          imageAction(current, handlers.current.onImage, file);
          return true;
        },
      },
    },
    onUpdate({ editor }) { handlers.current.onChange(editor.getJSON() as Node); },
  });
  useEffect(() => { instance.current = editor; }, [editor]);
  const active = useEditorState({
    editor,
    selector: ({ editor }) => editor && ({
      bold: editor.isActive("bold"), italic: editor.isActive("italic"), quote: editor.isActive("blockquote"),
      link: editor.isActive("link"), bullet: editor.isActive("bulletList"), ordered: editor.isActive("orderedList"),
      h2: editor.isActive("heading", { level: 2 }), h3: editor.isActive("heading", { level: 3 }),
      image: editor.isActive("inlineImage"),
    }),
  });
  if (!editor) return <p>Loading editor…</p>;
  return <div className={styles.rich}>
    <div className={styles.toolbar} role="group" aria-label="Article formatting">
      <button type="button" aria-pressed={!active?.h2 && !active?.h3} aria-label="Paragraph" title="Paragraph" onClick={() => editor.chain().focus().setParagraph().run()}>¶</button>
      <button type="button" aria-pressed={active?.h2} aria-label="Heading 2" title="Heading 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button type="button" aria-pressed={active?.h3} aria-label="Heading 3" title="Heading 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
      <button type="button" aria-label="Bold" aria-pressed={active?.bold} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={16} /></button>
      <button type="button" aria-label="Italic" aria-pressed={active?.italic} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={16} /></button>
      <button type="button" aria-label="Bullet list" aria-pressed={active?.bullet} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={17} /></button>
      <button type="button" aria-label="Numbered list" aria-pressed={active?.ordered} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={17} /></button>
      <button type="button" aria-label="Quote" aria-pressed={active?.quote} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={16} /></button>
      <button type="button" aria-label="Link" aria-pressed={active?.link} onClick={() => {
        const href = window.prompt("Link URL. Leave blank to remove the link.", editor.getAttributes("link").href ?? "");
        if (href === null) return;
        if (!href.trim()) editor.chain().focus().extendMarkRange("link").unsetLink().run();
        else if (safeLink(href.trim())) editor.chain().focus().extendMarkRange("link").setLink({ href: href.trim() }).run();
        else window.alert("Use HTTP, HTTPS or a site-relative path.");
      }}><Link2 size={16} /></button>
      <button type="button" aria-label="Undo" onClick={() => editor.chain().focus().undo().run()}><CornerUpLeft size={16} /></button>
      <button type="button" aria-label="Redo" onClick={() => editor.chain().focus().redo().run()}><Redo2 size={16} /></button>
      <button type="button" className={styles.imageTool} onClick={() => imageAction(editor, onImage)}><ImagePlus size={17} /> {active?.image ? "Edit image" : "Image"}</button>
    </div>
    <EditorContent editor={editor} />
  </div>;
}
