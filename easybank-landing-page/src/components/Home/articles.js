import React, { Component } from 'react';
import "./home.scss";

class Articles extends Component {
  render() {
    return(
      <section className="articles">
        <main className="container">
            <h1 className="lead-articles">Latest Articles</h1>

            <article className="featured-article">
            <a href="/">
              <aside className="article-hero">
                <figure>
                    <img src="https://i.imgur.com/7QhsNZ9.jpg" alt="Receive money in any currency with no fees" />
                </figure>
              </aside>

              <aside className="article-content">
                <span className="author">By Claire Robinson</span>
                  <h2 className="article-title">
                      Receive money in any currency with no fees
                  </h2>
                <p>
                  The world is getting smaller and we’re becoming more mobile. So why should you be 
                  forced to only receive money in a single …
                </p>
              </aside>
              </a>
            </article>

          
            <article className="featured-article">
            <a href="/">
              <aside className="article-hero">
                <figure>
                  <img src="https://i.imgur.com/W3Dd8YE.jpg" alt="Treat yourself without worrying about money" />
                </figure>
              </aside>
              
              <aside className="article-content">
                <span className="author">By Wilson Hutton</span>
                  <h2 className="article-title">
                      Treat yourself without worrying about money
                  </h2>
                <p>
                  Our simple budgeting feature allows you to separate out your spending and set 
                  realistic limits each month. That means you   …
                </p>
              </aside>
            </a>
            </article>

            <article className="featured-article">
            <a href="/">
              <aside className="article-hero">
                <figure>
                  <img src="https://i.imgur.com/WTuels2.jpg" alt="Take your Easybank card wherever you go" />
                </figure>
              </aside>

              <aside className="article-content">
                <span className="author">By Wilson Hutton</span>
                  <h2 className="article-title">
                      Take your Easybank card wherever you go
                  </h2>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                  while you’re abroad. We’ll even show you …
                </p>
              </aside>
            </a>
            </article>

            <article className="featured-article">
            <a href="/">
              <aside className="article-hero">
                <figure>
                  <img src="https://i.imgur.com/PdPfHuA.jpghttps://i.imgur.com/PdPfHuA.jpg" alt="Our invite-only Beta accounts are now live!" />
                </figure>
              </aside>

              <aside className="article-content">
                <span className="author">By Claire Robinson</span>
                  <h2 className="article-title">
                      Our invite-only Beta accounts are now live!
                  </h2>
                <p>
                  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                  It’s easy to request an invite through the site ...
                </p>
              </aside>
              </a>
            </article>

          </main>
      </section>
    )
  }
}

export default Articles;
