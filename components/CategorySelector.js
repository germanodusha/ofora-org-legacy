import React from "react";
import CategorySelectorItem from "./CategorySelectorItem";
import { Consumer } from "../components/base/Context";

export default class CategorySelector extends React.Component {
  state = {
    selected: null,
  };
  render() {
    const { categories, selected, onClick } = this.props;
    return (
      <Consumer>
        {(context) => {
          const lang = context ? context.lang : "br";
          return (
            <div>
              {this.renderItems({ lang, categories, selected, onClick })}
              <style jsx>{`
                div {
                  font-family: "Source Serif Pro", serif;
                  font-weight: 600;
                  font-size: 29px;
                }
                @media only screen and (min-width: 752px) {
                  div {
                    font-size: 41px;
                    max-width: 790px;
                  }
                }
              `}</style>
            </div>
          );
        }}
      </Consumer>
    );
  }

  renderItems = ({ lang, categories, selected, onClick }) => {
    return categories.map((category) => {
      const name = category.data.name[0].text;
      const isSelected = selected === name;
      return (
        <CategorySelectorItem
          name={
            lang === "br"
              ? category.data.name[0].text
              : category.data.name_en[0].text
          }
          key={category.data.name[0].text}
          onClick={() => onClick(category.data.name[0].text)}
          selected={isSelected}
        />
      );
    });
  };
}
