import React, { Component } from 'react';
import "./home.scss";

class Articles extends Component {
  render() {
    return(
      <section className="articles">
        
          <h1 className="lead-articles">Latest Articles</h1>

          <article className="featured-article">
            <aside className="article-hero">
                <a href="/">
                  <img src="https://i.imgur.com/7QhsNZ9.jpg" alt="Receive money in any currency with no fees" />
                </a>
            </aside>

            <aside className="article-content">
              <span className="author">By Claire Robinson</span>
                <h2 className="article-title">
                  <a href="/">
                    Receive money in any currency with no fees
                  </a>
                </h2>
              <p>
                The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …
              </p>
            </aside>
          </article>

         
          <article className="featured-article">
            <aside className="article-hero">
              <a href="/">
                <img src="https://i.imgur.com/W3Dd8YE.jpg" alt="Treat yourself without worrying about money" />
              </a>
            </aside>
            
            <aside className="article-content">
              <span className="author">By Wilson Hutton</span>
                <h2 className="article-title">
                  <a href="/">
                    Treat yourself without worrying about money
                  </a>
                </h2>
              <p>
                Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you   …
              </p>
            </aside>
          </article>

          <article className="featured-article">
            <aside className="article-hero">
                <a href="/">
                  <img src="https://i.imgur.com/WTuels2.jpg" alt="Take your Easybank card wherever you go" />
                </a>
            </aside>

            <aside className="article-content">
              <span className="author">By Wilson Hutton</span>
                <h2 className="article-title">
                  <a href="/">
                    Take your Easybank card wherever you go
                  </a>
                </h2>
              <p>
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                while you’re abroad. We’ll even show you …
              </p>
            </aside>
          </article>

          <article className="featured-article">
            <aside className="article-hero">
                <a href="/">
                  <img src="https://i.imgur.com/PdPfHuA.jpghttps://i.imgur.com/PdPfHuA.jpg" alt="Our invite-only Beta accounts are now live!" />
                </a>
            </aside>

            <aside className="article-content">
              <span className="author">By Claire Robinson</span>
                <h2 className="article-title">
                  <a href="/">
                    Our invite-only Beta accounts are now live!
                  </a>
                </h2>
              <p>
                After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...
              </p>
            </aside>
          </article>
      </section>
    )
  }
}

export default Articles;
