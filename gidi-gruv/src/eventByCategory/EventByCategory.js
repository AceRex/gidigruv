import React, {useState} from "react";
import "./Page.css";
import Card from './card'

export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: [
        { category: "Entertainment", color: "var(--ColorPink)", link: '/' },
        { category: "Business Seminar", color: '#9F11E1', link: '/'},
        { category: "Life Style", color: '#E99108', link: '/'},
        { category: "Technology", color: '#0817E9', link: '/'},
        { category: "Religious", color: 'var(--ColorPurple)', link: '/'},
        { category: "Sports", color: '#9F11E1', link: '/'},
        { category: "Health Care and Medical", color: '#0817E9', link: '/'},
        { category: "Workshop", color: 'var(--ColorPink)', link: '/'},
        { category: "Trade Fair", color: '#E99108', link: '/' }

      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <p>
            Explore
            <br /> By Category
          </p>
          <div className="category-cards">
              {this.state.Categories.map((items) => {
                  return(
                    <Card category={items.category} link={items.link}/>
                  )
              })}
          </div>
        </div>
      </div>
    );
  }
}
