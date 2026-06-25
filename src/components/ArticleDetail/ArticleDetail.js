import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById } from '../../data/articles';
import LoadingSpinner from '../common/LoadingSpinner';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟异步加载
    const timer = setTimeout(() => {
      const foundArticle = getArticleById(id);
      setArticle(foundArticle);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // 设置页面标题
    if (article) {
      document.title = `${article.title} | My Blog`;
    }
    
    return () => {
      document.title = 'My Blog';
    };
  }, [article]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBackClick();
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading article..." />;
  }

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <button className={styles.backButton} onClick={handleBackClick}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className={styles.articleDetail}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <button 
            className={styles.backButton}
            onClick={handleBackClick}
            onKeyPress={handleKeyPress}
            aria-label="Back to home"
          >
            <svg className={styles.backIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </button>
        </nav>
      </header>

      {/* Article Content */}
      <article className={styles.article}>
        {/* Article Header */}
        <div className={styles.articleHeader}>
          {article.coverImage && (
            <div className={styles.coverImageContainer}>
              <img
                src={article.coverImage}
                alt={article.title}
                className={styles.coverImage}
              />
            </div>
          )}
          
          <div className={styles.articleMeta}>
            <div className={styles.tags}>
              {article.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <h1 className={styles.title}>{article.title}</h1>
            
            <div className={styles.metadata}>
              <span className={styles.author}>by {article.author}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{article.publishDate}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
            
            {article.excerpt && (
              <p className={styles.excerpt}>{article.excerpt}</p>
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className={styles.articleBody}>
          <div className={styles.content}>
            {(() => {
              const lines = article.content.split('\n');
              const elements = [];
              let i = 0;

              const processInlineFormatting = (text) => {
                return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, idx) => {
                  if (part.match(/^\*\*[^*]+\*\*$/)) {
                    return <strong key={idx}>{part.slice(2, -2)}</strong>;
                  }
                  if (part.match(/^`[^`]+`$/)) {
                    return <code key={idx} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
                  }
                  return part;
                });
              };

              const isTableRow = (line) => line.trim().startsWith('|') && line.trim().endsWith('|');
              const isSeparatorRow = (line) => /^\|[\s\-|]+\|$/.test(line.trim());

              while (i < lines.length) {
                const line = lines[i];

                if (line.trim() === '') { i++; continue; }

                if (line.trim() === '---') {
                  elements.push(<hr key={i} className={styles.divider} />);
                  i++;
                  continue;
                }

                if (line.startsWith('# ')) {
                  elements.push(<h1 key={i} className={styles.contentH1}>{line.replace('# ', '')}</h1>);
                  i++;
                  continue;
                }

                if (line.startsWith('## ')) {
                  elements.push(<h2 key={i} className={styles.contentH2}>{line.replace('## ', '')}</h2>);
                  i++;
                  continue;
                }

                if (line.startsWith('### ')) {
                  elements.push(<h3 key={i} className={styles.contentH3}>{line.replace('### ', '')}</h3>);
                  i++;
                  continue;
                }

                if (line.startsWith('```')) {
                  elements.push(
                    <pre key={i} className={styles.codeBlock}>
                      <code>{line.replace(/```\w*\n?/, '').replace(/```$/, '')}</code>
                    </pre>
                  );
                  i++;
                  continue;
                }

                // 表格：收集连续的表格行
                if (isTableRow(line)) {
                  const tableLines = [];
                  while (i < lines.length && isTableRow(lines[i])) {
                    tableLines.push(lines[i]);
                    i++;
                  }
                  const parseRow = (row) =>
                    row.trim().slice(1, -1).split('|').map(cell => cell.trim());

                  const headerCells = parseRow(tableLines[0]);
                  const bodyRows = tableLines.slice(2).filter(r => !isSeparatorRow(r));

                  elements.push(
                    <table key={`table-${i}`} className={styles.table}>
                      <thead>
                        <tr>
                          {headerCells.map((cell, ci) => (
                            <th key={ci} className={styles.th}>{processInlineFormatting(cell)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bodyRows.map((row, ri) => (
                          <tr key={ri}>
                            {parseRow(row).map((cell, ci) => (
                              <td key={ci} className={styles.td}>{processInlineFormatting(cell)}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  );
                  continue;
                }

                elements.push(
                  <p key={i} className={styles.paragraph}>
                    {processInlineFormatting(line)}
                  </p>
                );
                i++;
              }

              return elements;
            })()}
          </div>
        </div>

        {/* Article Footer */}
        <footer className={styles.articleFooter}>
          <div className={styles.footerTags}>
            <h3>Tags:</h3>
            <div className={styles.tagList}>
              {article.tags.map(tag => (
                <span key={tag} className={styles.footerTag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <button 
            className={styles.backToTopButton}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </footer>
      </article>
    </div>
  );
};

export default ArticleDetail;