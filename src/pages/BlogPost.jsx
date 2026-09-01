import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { Prose } from "../components/pagekit";
import Placeholder from "./Placeholder";
import { sortedPosts } from "./Pressroom";
import "./blog.css";

export default function BlogPost() {
  const { slug } = useParams();
  const idx = sortedPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Placeholder />;
  const post = sortedPosts[idx];
  const next = [sortedPosts[idx + 1], sortedPosts[idx + 2], sortedPosts[idx + 3]].filter(Boolean);

  return (
    <main className="article">
      <div className="wrap article__head">
        <Reveal>
          <Link to="/pressroom" className="article__back"><ArrowLeft size={15} /> Pressroom</Link>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="article__meta">
            <span className="blogtag">AlloyX</span>
            <span>{post.date}{post.readtime ? ` · ${post.readtime}` : ""}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}><h1 className="article__title">{post.title}</h1></Reveal>
      </div>

      {post.img && (
        <Reveal delay={0.15} className="wrap">
          <div className="article__cover"><img src={post.img} alt="" /></div>
        </Reveal>
      )}

      <div className="wrap article__body">
        <Reveal><Prose body={post.body} /></Reveal>
      </div>

      {next.length > 0 && (
        <section className="pk-sec article__next">
          <div className="wrap">
            <span className="eyebrow">Read next</span>
            <div className="postlist">
              {next.map((p) => (
                <Link key={p.slug} to={`/post/${p.slug}`} className="postrow">
                  <span className="postrow__date">{p.date}</span>
                  <span className="postrow__title">{p.title}</span>
                  <ArrowUpRight className="postrow__arrow" size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
