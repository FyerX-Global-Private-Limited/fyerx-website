import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { Node } from "@/lib/editorial/document";

function textContent(node: Node): string {
  return node.text ?? (node.content ?? []).map(textContent).join("");
}

export function articleHeadings(doc: Node) {
  return (doc.content ?? []).flatMap((node, index) => {
    const title = textContent(node).trim();
    return node.type === "heading" && title ? [{ id: "section-" + (index + 1), title }] : [];
  });
}

function render(node: Node, id?: string): ReactNode {
  const content = node.content?.map((child, index) => <Fragment key={index}>{render(child)}</Fragment>);
  switch (node.type) {
    case "text":
      return (node.marks ?? []).reduce<ReactNode>((value, mark) => {
        if (mark.type === "bold") return <strong>{value}</strong>;
        if (mark.type === "italic") return <em>{value}</em>;
        if (mark.type === "link") return <a href={mark.attrs?.href}>{value}</a>;
        return value;
      }, node.text);
    case "hardBreak": return <br />;
    case "paragraph": return <p>{content}</p>;
    case "heading": return node.attrs?.level === 3 ? <h3 id={id} tabIndex={-1}>{content}</h3> : <h2 id={id} tabIndex={-1}>{content}</h2>;
    case "blockquote": return <blockquote>{content}</blockquote>;
    case "bulletList": return <ul>{content}</ul>;
    case "orderedList": return <ol>{content}</ol>;
    case "listItem": return <li>{content}</li>;
    case "inlineImage":
      return (
        <figure>
          <Image src={String(node.attrs?.src)} alt={String(node.attrs?.alt ?? "")} width={1200} height={800} unoptimized />
          {node.attrs?.caption && <figcaption>{node.attrs.caption}</figcaption>}
        </figure>
      );
    default: return null;
  }
}

export function ArticleBody({ doc }: { doc: Node }) {
  return (doc.content ?? []).map((node, index) => (
    <Fragment key={index}>{render(node, node.type === "heading" ? "section-" + (index + 1) : undefined)}</Fragment>
  ));
}
